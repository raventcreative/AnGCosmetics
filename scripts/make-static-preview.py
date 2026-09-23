"""
Menyiapkan hasil `EXPORT=1 npm run build` (folder out/) agar bisa dibuka dari
mana pun — root domain maupun subpath — dengan cara:

1. Mengubah seluruh path absolut (/_next, /products, /editorial, ...) jadi relatif
   terhadap kedalaman masing-masing file, termasuk yang tertanam di payload RSC
   supaya hasil hidrasi React tidak mengembalikannya ke path absolut.
2. Memaksa klik tautan internal menjadi navigasi halaman biasa, karena router
   sisi klien Next tidak punya endpoint RSC saat disajikan sebagai file statis.

Dipakai hanya untuk preview. Deploy sungguhan tetap memakai `npm run build`.
"""
import pathlib, re, sys

OUT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "out")
# Hosting artifact mereservasi path yang diawali "_", jadi _next/ diganti nama.
NEXT_DIR = "next-assets"
ASSET_DIRS = ["_next/", "products/", "gallery/", "editorial/", "graphics/"]
ASSET_FILES = ["icon.svg", "favicon.ico", "sitemap.xml", "robots.txt"]

# Semua rute hasil export: folder yang punya index.html
routes = []
for html in OUT.rglob("index.html"):
    rel = html.parent.relative_to(OUT).as_posix()
    routes.append("" if rel == "." else rel)
routes.sort(key=len, reverse=True)  # rute terpanjang dulu agar tidak saling timpa

HEAD_SHIM = """<script>
window.__NEXT_ASSET_BASE__="{prefix}_next/";
window.__AG_BASE__="{prefix}";
/* Halaman yang dirender di sisi klien (mis. katalog yang membaca query string)
   melahirkan tautan dan gambar berpath absolut, yang tidak tersentuh perbaikan
   saat build. Di sini path itu dibuat relatif begitu elemennya muncul. */
(function () {{
  var base = window.__AG_BASE__;
  if (!base) return;
  function toFile(rel) {{
    /* Hosting statis belum tentu melayani indeks direktori, jadi ditulis eksplisit */
    var q = rel.indexOf("?");
    var path = q === -1 ? rel : rel.slice(0, q);
    var rest = q === -1 ? "" : rel.slice(q);
    if (!path) path = "index.html";
    else if (path.charAt(path.length - 1) === "/") path += "index.html";
    else if (!/\.[a-z0-9]+$/i.test(path)) path += "/index.html";
    return path + rest;
  }}
  function fix(el) {{
    if (!el || !el.getAttribute) return;
    ["src", "href"].forEach(function (attr) {{
      var v = el.getAttribute(attr);
      if (!v || v.charAt(0) !== "/" || v.charAt(1) === "/") return;
      var rel = v.slice(1);
      el.setAttribute(attr, base + (attr === "href" && el.tagName === "A" ? toFile(rel) : rel));
    }});
  }}
  new MutationObserver(function (muts) {{
    muts.forEach(function (m) {{
      if (m.type === "attributes") return fix(m.target);
      m.addedNodes && Array.prototype.forEach.call(m.addedNodes, function (n) {{
        if (n.nodeType !== 1) return;
        fix(n);
        n.querySelectorAll && Array.prototype.forEach.call(n.querySelectorAll("[src],[href]"), fix);
      }});
    }});
  }}).observe(document.documentElement, {{
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["src", "href"],
  }});
}})();
/* Preview statis: prefetch RSC tidak punya endpoint di hosting statis. */
(function () {{
  var f = window.fetch;
  if (!f) return;
  window.fetch = function (input) {{
    var u = typeof input === "string" ? input : (input && input.url) || "";
    if (u.indexOf("_rsc=") !== -1) return Promise.resolve(new Response(null, {{ status: 204 }}));
    return f.apply(this, arguments);
  }};
}})();
</script>"""

HARD_NAV = """<script>
/* __AG_HARD_NAV__ paksa navigasi halaman penuh supaya tautan relatif tetap jalan. */
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if (!a || a.target === '_blank') return;
  var href = a.getAttribute('href');
  if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) return;
  if (href.charAt(0) === '/') {
    /* Cadangan bila ada tautan absolut yang lolos dari pengamat di atas */
    var rel = href.replace(/^\/+/, '');
    var q = rel.indexOf('?');
    var path = q === -1 ? rel : rel.slice(0, q);
    var rest = q === -1 ? '' : rel.slice(q);
    if (!path) path = 'index.html';
    else if (path.charAt(path.length - 1) === '/') path += 'index.html';
    else if (!/\.[a-z0-9]+$/i.test(path)) path += '/index.html';
    href = (window.__AG_BASE__ || '') + path + rest;
  }
  e.preventDefault();
  e.stopPropagation();
  window.location.href = href;
}, true);
</script>
"""

def rewrite_html(path: pathlib.Path) -> None:
    depth = len(path.relative_to(OUT).parts) - 1
    prefix = "../" * depth
    s = path.read_text(encoding="utf-8")

    # 1. Tautan antar halaman (bentuk polos dan bentuk ter-escape di payload RSC)
    for route in routes:
        target = f"{prefix}{route}/index.html" if route else f"{prefix}index.html"
        for src in ({f"/{route}", f"/{route}/"} if route else {"/"}):
            s = s.replace(f'"{src}"', f'"{target}"')
            s = s.replace(f'\\"{src}\\"', f'\\"{target}\\"')

    # 2. Aset
    for d in ASSET_DIRS:
        s = s.replace(f'"/{d}', f'"{prefix}{d}').replace(f'\\"/{d}', f'\\"{prefix}{d}')
    for f in ASSET_FILES:
        s = s.replace(f'"/{f}', f'"{prefix}{f}').replace(f'\\"/{f}', f'\\"{prefix}{f}')

    # 3. Basis aset + shim fetch, dipasang paling awal di <head>
    if "__AG_BASE__" not in s:
        s = s.replace("<head>", "<head>" + HEAD_SHIM.format(prefix=prefix), 1)

    # 4. Polyfill legacy hanya dimuat lewat nomodule (diabaikan browser modern) dan
    #    berisi karakter yang tidak lolos validasi teks di hosting preview — dilepas.
    s = re.sub(r'<script[^>]*polyfills[^>]*></script>', "", s)

    # 5. Navigasi keras
    if "__AG_HARD_NAV__" not in s:
        s = s.replace("</body>", HARD_NAV + "</body>")

    path.write_text(s, encoding="utf-8")

def rewrite_css(path: pathlib.Path) -> None:
    s = path.read_text(encoding="utf-8")
    # File CSS ada di _next/static/css/, font ada di _next/static/media/
    s = s.replace("/_next/static/media/", "../media/")
    path.write_text(s, encoding="utf-8")

def rewrite_runtime(path: pathlib.Path) -> int:
    """publicPath webpack dibuat mengikuti __NEXT_ASSET_BASE__ milik halaman."""
    s = path.read_text(encoding="utf-8")
    if "__NEXT_ASSET_BASE__" in s:
        return 0
    dynamic = '(typeof window!=="undefined"&&window.__NEXT_ASSET_BASE__||"/_next/")'
    n = s.count('.p="/_next/"')
    if n:
        s = s.replace('.p="/_next/"', ".p=" + dynamic)
        path.write_text(s, encoding="utf-8")
    return n


html_files = list(OUT.rglob("*.html"))
for p in html_files:
    rewrite_html(p)
css_files = list(OUT.rglob("*.css"))
for p in css_files:
    rewrite_css(p)
runtime_patched = sum(rewrite_runtime(p) for p in OUT.rglob("_next/static/chunks/*.js"))
for f in OUT.rglob("_next/static/chunks/polyfills-*.js"):
    f.unlink()

# Build ID Next kadang diawali "_" — hosting artifact menolaknya, jadi ikut diganti
build_id_dir = next(
    (d for d in (OUT / "_next" / "static").glob("*") if d.is_dir() and d.name.startswith("_")),
    None,
)
if build_id_dir is not None:
    new_name = "b" + build_id_dir.name.lstrip("_")
    old_name = build_id_dir.name
    build_id_dir.rename(build_id_dir.with_name(new_name))
    for f in OUT.rglob("*"):
        if f.is_file() and f.suffix in {".html", ".css", ".js", ".txt", ".json"}:
            t = f.read_text(encoding="utf-8", errors="ignore")
            if old_name in t:
                f.write_text(t.replace(old_name, new_name), encoding="utf-8")

# Rename _next/ -> next-assets/ dan perbarui seluruh acuannya
renamed = 0
src_dir = OUT / "_next"
if src_dir.exists():
    src_dir.rename(OUT / NEXT_DIR)
    for f in OUT.rglob("*"):
        if f.is_file() and f.suffix in {".html", ".css", ".js", ".txt", ".json"}:
            t = f.read_text(encoding="utf-8", errors="ignore")
            if "_next/" in t:
                f.write_text(t.replace("_next/", NEXT_DIR + "/"), encoding="utf-8")
                renamed += 1

print(f"rute      : {len(routes)}")
print(f"html      : {len(html_files)}")
print(f"css       : {len(css_files)}")
print(f"publicPath: {runtime_patched} titik dipatch")
print(f"_next/    : diganti {NEXT_DIR}/ di {renamed} file")
