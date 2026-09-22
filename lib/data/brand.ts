/** Konten brand guideline — sumber: AG_COSMETIC_BRAND_GUIDELINE_V3.pdf (Garden Blossom v1.0). */

export const brandMeta = {
  version: "Alternative V3 · Garden Blossom · Versi 1.0",
  date: "21 September 2026",
  note: "Acuan tunggal identitas visual A&G Cosmetics untuk konten, kemasan, dan marketplace.",
};

export const brandAbout = {
  text: "Brand kecantikan lokal sejak 2008, lahir dari A&G Shower Gold. Kini tampil baru sebagai affordable luxury: buatan Indonesia dengan standar Korea, BPOM dan Halal, di harga Rp 30rb sampai Rp 80rb. Target inti Gen Z wanita, tetap nyaman untuk usia 25 sampai 35.",
  character: ["Elegan", "Soft", "Terpercaya", "Bestie-like"],
  taglineUsage: "Penutup caption, stiker kemasan, closing story. Satu materi cukup satu kali.",
};

export const voiceRules = [
  'Sapa dengan "Bestie" atau "kamu", bukan "lo" atau "Anda".',
  "Klaim bisa dibuktikan: BPOM, Halal, kandungan. Tanpa janji instan.",
  "Hindari ALL CAPS dan tanda seru bertumpuk. CTA lembut dan spesifik.",
  "Kalimat pendek, satu ide per kalimat.",
];

export const voiceExample = {
  right: "Bestie, kulit kusam? Shower Gel ini bantu cerahin dari kamar mandi.",
  wrong: "PEMUTIH PALING AMPUH!!! DIJAMIN PUTIH SEMINGGU!!!",
};

export const logoRules = {
  desc: "Wordmark serif kontras tinggi (Bodoni Moda) dengan deskriptor COSMETICS berjarak lebar. Tanpa simbol tambahan, tetap terbaca di kemasan kecil.",
  must: [
    'Clear space setinggi huruf "A" kecil.',
    "Minimum 8 mm cetak / 24 px layar.",
    "Di atas foto ramai, taruh di card cream atau ivory.",
    "Warna hanya cocoa, blossom-deep, atau ivory (diapositif).",
  ],
  never: [
    "Meregangkan, memiringkan, memutar.",
    "Ganti font atau warna di luar palet.",
    "Tambah shadow, glow, gradasi, outline.",
    "Menaruh elemen grafis tepat di belakang logo.",
  ],
};

export const graphicElements = [
  { title: "Badge bunga scallop", desc: "Blossom-pink, cotton-pink, atau butter-cream sebagai latar produk dan sticker diskon." },
  { title: "Daun sage", desc: "Aksen natural untuk ikon dan garis. Maksimal dua elemen per desain." },
  { title: "Garis tangkai organik", desc: "Garis lengkung tipis untuk memberi kesan fresh dan lembut." },
];

export const avoidList = [
  "Gradasi pelangi",
  "Glitter",
  "Drop shadow tebal",
  "Sudut tajam",
  "Elemen tepat di belakang logo",
  "Teks kecil warna blossom-pink atau butter-cream",
];

export const socialAssets = [
  { asset: "Profile", size: "320×320", rule: "Wordmark cocoa di atas blush, tanpa deskriptor." },
  { asset: "Feed", size: "1080×1350", rule: "Selang-seling foto produk, edukasi kandungan, quote." },
  { asset: "Story / TikTok", size: "1080×1920", rule: "Logo atas, produk tengah, tagline + CTA bawah. Safe zone 250px." },
  { asset: "Highlight", size: "1080×1920", rule: "Ikon garis rose di tengah, latar cotton-pink, ikon ±420px." },
  { asset: "Thumbnail marketplace", size: "1:1", rule: "Produk di tengah, background butter-cream atau cotton-pink polos." },
  { asset: "Banner toko", size: "1200×400", rule: "Satu headline Fraunces, maksimal dua produk." },
];

export const packagingRules = [
  "Wordmark di sepertiga atas depan, rata tengah.",
  "Nama produk memakai Fraunces, klaim memakai Nunito.",
  "Tetap di keluarga warna pink.",
  "Nomor POM dan logo halal wajib terbaca.",
];

export const colorProportion = [
  { label: "60% ivory & butter-cream", value: 60, class: "bg-butter-cream" },
  { label: "25% blossom & cotton pink", value: 25, class: "bg-blossom-pink" },
  { label: "10% cocoa", value: 10, class: "bg-cocoa" },
  { label: "5% blossom-deep & sage", value: 5, class: "bg-blossom-deep" },
];
