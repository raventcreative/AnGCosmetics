/** Token design system — mirror dari design_system_ang_cosmetics.pdf (02 · Foundations). */

export const colorTokens = [
  { token: "blossom-pink", hex: "#F09DBB", usage: "Warna signature. Bidang besar, hero, badge bunga, background produk.", contrast: "Teks cocoa di atasnya 6.3:1", class: "bg-blossom-pink", text: "text-cocoa" },
  { token: "blossom-deep", hex: "#A9436C", usage: "Warna aksi: tombol utama, harga, link, aksen judul.", contrast: "Teks ivory di atasnya 5.6:1", class: "bg-blossom-deep", text: "text-ivory" },
  { token: "cotton-pink", hex: "#F4C3D1", usage: "Tint lembut: chip varian, badge, tagline box, hover state.", contrast: "Teks cocoa di atasnya", class: "bg-cotton-pink", text: "text-cocoa" },
  { token: "sage", hex: "#9EB79B", usage: "Aksen daun, ikon, garis dekoratif, badge natural. Jangan untuk teks.", contrast: "Teks cocoa di atasnya 6:1", class: "bg-sage", text: "text-cocoa" },
  { token: "sage-deep", hex: "#5F7A5C", usage: "Versi teks dari sage: label kandungan natural, ikon garis di atas ivory.", contrast: "4.7:1 di atas ivory", class: "bg-sage-deep", text: "text-ivory" },
  { token: "butter-cream", hex: "#FBF8CE", usage: "Background section selang-seling dan banner info. Bukan background card.", contrast: "Teks cocoa di atasnya", class: "bg-butter-cream", text: "text-cocoa" },
  { token: "ivory", hex: "#FFFDF6", usage: "Background halaman dan template konten. Pengganti putih polos.", contrast: "Teks cocoa di atasnya", class: "bg-ivory", text: "text-cocoa" },
  { token: "white", hex: "#FFFFFF", usage: "Background SEMUA card dan input, dengan border line agar clean.", contrast: "Teks cocoa di atasnya", class: "bg-white", text: "text-cocoa" },
  { token: "cocoa", hex: "#3B2E30", usage: "Ink utama: semua teks baca, ikon utama. Pengganti hitam.", contrast: "Teks ivory di atasnya", class: "bg-cocoa", text: "text-ivory" },
  { token: "cocoa-soft", hex: "#6E5E60", usage: "Teks sekunder: caption, deskripsi kecil, nomor BPOM, placeholder.", contrast: "6:1 di atas ivory", class: "bg-cocoa-soft", text: "text-ivory" },
  { token: "line", hex: "#EFE6DA", usage: "Border card, divider, garis tabel, outline input default.", contrast: "Dekoratif", class: "bg-line", text: "text-cocoa" },
  { token: "success", hex: "#4E7D55", usage: "Status berhasil: stok tersedia, pembayaran sukses.", contrast: "Teks ivory di atasnya", class: "bg-success", text: "text-ivory" },
  { token: "warning", hex: "#A8652A", usage: "Status peringatan: stok menipis, batas waktu promo.", contrast: "Teks ivory di atasnya", class: "bg-warning", text: "text-ivory" },
  { token: "error", hex: "#B3362F", usage: "Status error: validasi form, pembayaran gagal.", contrast: "Teks ivory di atasnya", class: "bg-error", text: "text-ivory" },
];

export const typeScale = [
  { style: "display-xl", sample: "Glow ala Korea", size: "56px / 60px · 400", usage: "Hero website desktop, cover campaign.", class: "text-display-xl font-display" },
  { style: "display-l", sample: "Your Skin's Bestie", size: "40px / 46px · 400", usage: "Hero mobile, headline feed.", class: "text-display-l font-display" },
  { style: "heading-1", sample: "Your Skin's Bestie", size: "32px / 38px · 400", usage: "Judul halaman, judul section besar.", class: "text-heading-1 font-display" },
  { style: "heading-2", sample: "Your Skin's Bestie", size: "24px / 30px · 600", usage: "Judul section, nama produk di detail.", class: "text-heading-2 font-display" },
  { style: "tagline", sample: "Your Skin's Bestie.", size: "22px / 28px · 400", usage: "Tagline dan kata aksen. Satu baris per materi.", class: "text-tagline font-display italic" },
  { style: "title", sample: "Your Skin's Bestie", size: "18px / 26px · 600", usage: "Judul card, nama produk di product card.", class: "text-title font-sans" },
  { style: "body", sample: "Your Skin's Bestie", size: "16px / 26px · 400", usage: "Paragraf, deskripsi produk.", class: "text-body font-sans" },
  { style: "body-sm", sample: "Your Skin's Bestie", size: "14px / 22px · 400", usage: "Teks pendukung, review, caption panjang.", class: "text-body-sm font-sans" },
  { style: "price", sample: "Rp 60.000", size: "18px / 24px · 600", usage: "Harga jual (warna blossom-deep).", class: "text-price font-sans text-blossom-deep" },
  { style: "button", sample: "Your Skin's Bestie", size: "15px / 20px · 600", usage: "Label tombol.", class: "text-button font-sans" },
  { style: "caption", sample: "Your Skin's Bestie", size: "12px / 18px · 400", usage: "Keterangan kecil, ukuran, BPOM.", class: "text-caption font-sans text-cocoa-soft" },
  { style: "label", sample: "BODY CARE", size: "11px / 16px · 600 · 0.12em", usage: "Eyebrow, kategori, label uppercase.", class: "text-label font-sans uppercase" },
];

export const spacingTokens = [
  { token: "space-1", value: "4px", usage: "Ikon ke teks." },
  { token: "space-2", value: "8px", usage: "Isi chip, jarak label ke input." },
  { token: "space-3", value: "12px", usage: "Padding tombol kecil, gap list." },
  { token: "space-4", value: "16px", usage: "Padding card, gutter mobile." },
  { token: "space-6", value: "24px", usage: "Gap grid produk, padding modal." },
  { token: "space-8", value: "32px", usage: "Gutter desktop, jarak antar blok." },
  { token: "space-12", value: "48px", usage: "Jarak antar section mobile." },
  { token: "space-16", value: "64px", usage: "Jarak antar section desktop." },
  { token: "space-24", value: "96px", usage: "Napas hero desktop." },
];

export const radiusTokens = [
  { token: "radius-sm", value: "8px", usage: "Input, thumbnail kecil, toast.", class: "rounded-sm" },
  { token: "radius-md", value: "12px", usage: "Dropdown, mega menu, card kecil.", class: "rounded-md" },
  { token: "radius-lg", value: "20px", usage: "Product card, modal, banner.", class: "rounded-lg" },
  { token: "radius-xl", value: "28px", usage: "Hero image, template feed.", class: "rounded-xl" },
  { token: "radius-pill", value: "999px", usage: "Tombol, chip, badge harga.", class: "rounded-full" },
];

export const shadowTokens = [
  { token: "shadow-sm", value: "0 1px 2px rgba(59,46,48,.06), 0 2px 6px rgba(59,46,48,.05)", usage: "Card hover ringan, input focus.", class: "shadow-sm" },
  { token: "shadow-md", value: "0 6px 18px rgba(169,67,108,.10)", usage: "Dropdown, product card hover, toast.", class: "shadow-md" },
  { token: "shadow-lg", value: "0 18px 48px rgba(59,46,48,.16)", usage: "Modal, cart drawer.", class: "shadow-lg" },
];

export const breakpointTokens = [
  { token: "bp-mobile", value: "360px", usage: "4 kolom, gutter 16px, 2 product card per baris." },
  { token: "bp-tablet", value: "768px", usage: "8 kolom, gutter 24px, 3 product card per baris." },
  { token: "bp-desktop", value: "1200px", usage: "12 kolom, gutter 32px, container 1200px, 4 product card per baris." },
];

export const principles = [
  {
    title: "Fresh, lembut, natural",
    desc: "Pink blossom, cotton pink, butter cream, dan aksen daun sage. Terasa seperti taman di pagi hari, bukan pink yang norak.",
  },
  {
    title: "Elegan lewat tipografi",
    desc: "Fraunces (serif lembut, italic asli) untuk headline dan kata aksen; Nunito (sans bulat) untuk semua teks baca dan UI.",
  },
  {
    title: "Produk selalu jadi pahlawan",
    desc: "Foto produk utuh, label terbaca, di atas bidang warna polos atau badge bunga.",
  },
  {
    title: "Klaim jujur",
    desc: "Hanya klaim yang bisa dibuktikan: BPOM, Halal, dan kandungan resmi produk.",
  },
];

export const componentGroups = [
  { id: "dasar-ui", no: "03", title: "Dasar UI", count: 8, items: ["Button", "Input", "Badge", "Card", "Modal", "Toast", "Pagination", "Rating"] },
  { id: "ecommerce", no: "04", title: "E-commerce", count: 5, items: ["ProductCard", "ProductDetail", "Cart", "CheckoutSummary", "Review"] },
  { id: "layout", no: "05", title: "Layout & Navigasi", count: 3, items: ["Navbar", "Hero", "Footer"] },
  { id: "konten", no: "06", title: "Konten & Edukasi", count: 4, items: ["BlogCard", "IngredientsSection", "FAQAccordion", "Testimonial"] },
  { id: "social", no: "07", title: "Social Media", count: 5, items: ["FeedTemplate", "Carousel", "StoryTemplate", "MarketplaceKit", "LiveAdsKit"] },
];

/**
 * Web theme "Quiet Blossom" — turunan Garden Blossom khusus website.
 * Brand guideline tetap berlaku penuh untuk kemasan, social media, dan marketplace.
 */
export const webThemeTokens = [
  {
    token: "paper",
    hex: "#FFFFFF",
    usage: "Background halaman website. Menggantikan ivory agar tampilan terasa lapang dan elegan.",
    class: "bg-paper",
    text: "text-cocoa",
  },
  {
    token: "mist",
    hex: "#F7F5F2",
    usage: "Bidang tenang: tile foto produk, section jeda, blok cara pakai. Pengganti butter-cream di web.",
    class: "bg-mist",
    text: "text-cocoa",
  },
  {
    token: "hairline",
    hex: "#E9E4DD",
    usage: "Garis tipis pemisah di atas putih. Menggantikan border card yang tebal.",
    class: "bg-hairline",
    text: "text-cocoa",
  },
];

export const webThemeRules = [
  {
    title: "Putih dominan, pink jadi aksen",
    desc: "Background halaman putih. Pink muncul di harga, kata aksen italic, chip varian, dan foto produk — bukan sebagai bidang besar. Proporsi 60/25/10/5 di brand guideline tetap dipakai untuk kemasan dan social media.",
  },
  {
    title: "Sudut siku untuk permukaan dan tombol",
    desc: "Website memakai sudut 0 untuk tile foto, section, input, dan tombol supaya terasa editorial. Radius pill tetap dipakai untuk chip, badge, dan seluruh materi social media sesuai brand guideline.",
  },
  {
    title: "Garis, bukan kotak",
    desc: "Pemisah memakai hairline 1px dan jarak, bukan card berbayang. Shadow hanya dipakai pada elemen melayang: modal, cart drawer, mega menu, dan toast.",
  },
  {
    title: "Foto yang memimpin",
    desc: "Setiap halaman utama dibuka oleh satu foto besar dengan satu pesan. Produk selalu tampil utuh di atas tile mist dengan label kemasan yang terbaca.",
  },
  {
    title: "Tipografi sebagai dekorasi",
    desc: "Fraunces dipakai besar dengan satu kata aksen italic. Label dan menu memakai style nav: 11px, uppercase, tracking 0.18em.",
  },
];
