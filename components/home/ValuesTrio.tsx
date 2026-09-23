import Image from "next/image";

/**
 * Tiga janji brand, dibaca lewat gambar besar dengan caption di bawahnya.
 * Setiap janji hanya berisi hal yang bisa dibuktikan.
 */
const values = [
  {
    image: "/editorial/ingredient-botanical.jpg",
    title: "Kandungan yang ditulis terbuka",
    desc: "Licorice, Niacinamide, Alpha Arbutin, PDRN. Kadarnya kami cantumkan, bukan disembunyikan di balik kata “aktif”.",
  },
  {
    image: "/editorial/texture-serum.jpg",
    title: "Formula untuk pemakaian harian",
    desc: "No-SLES, paraben free, tekstur ringan. Dibuat supaya kamu tetap nyaman memakainya tiap hari, bukan sesekali.",
  },
  {
    image: "/editorial/nature-terrace.jpg",
    title: "Buatan Indonesia, standar Korea",
    desc: "Diproduksi di dalam negeri dengan standar formulasi Korea. Seluruh produk punya izin edar BPOM dan sertifikasi halal.",
  },
];

export function ValuesTrio() {
  return (
    <section className="section-y bg-mist">
      <div className="container-ag flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-nav uppercase text-cocoa-soft">Kenapa A&amp;G</p>
          <h2 className="max-w-[26ch] font-display text-heading-1 text-cocoa desktop:text-display-l">
            Cantik nggak harus <em className="accent">mahal</em>, tapi harus jujur
          </h2>
        </div>
        <ul className="grid gap-8 tablet:grid-cols-3 tablet:gap-6">
          {values.map((value) => (
            <li key={value.title} className="flex flex-col gap-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                <Image
                  src={value.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-heading-2 font-normal text-cocoa">{value.title}</h3>
                <p className="text-body-sm text-cocoa-soft">{value.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
