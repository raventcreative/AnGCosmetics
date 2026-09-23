/**
 * Data produk — sumber: AG_Cosmetics.pdf (Company Profile 2026), section
 * "06 Product Line Up" + "07 Pricing" dan lembar spesifikasi produk hal. 12–25.
 * Nomor POM dan harga mengikuti company profile; klaim persentase mengikuti
 * lembar produk dan selalu disertai catatan sumber survei.
 */

export type ProductCategory = "face-care" | "body-care" | "fragrance" | "decorative";

/** Masalah kulit yang dijawab produk — dipakai filter "Shop by concern". */
export type ConcernId =
  | "kusam"
  | "noda"
  | "kering"
  | "barrier"
  | "pori"
  | "merata"
  | "makeup";

export const concerns: { id: ConcernId; label: string }[] = [
  { id: "kusam", label: "Kulit kusam" },
  { id: "noda", label: "Noda hitam & bekas" },
  { id: "kering", label: "Kulit kering" },
  { id: "barrier", label: "Barrier lemah" },
  { id: "pori", label: "Pori & tekstur" },
  { id: "merata", label: "Warna kulit belum merata" },
  { id: "makeup", label: "Tampil rapi seharian" },
];

/**
 * Filter kandungan. `match` dicocokkan dengan nama bahan di daftar komposisi
 * produk, jadi tidak ada klaim kandungan yang tidak tertulis di data produk.
 */
export const ingredientFilters: { id: string; label: string; match: string }[] = [
  { id: "pdrn", label: "PDRN", match: "pdrn" },
  { id: "alpha-arbutin", label: "Alpha Arbutin", match: "alpha arbutin" },
  { id: "niacinamide", label: "Niacinamide", match: "niacinamide" },
  { id: "centella", label: "Centella", match: "centella" },
  { id: "licorice", label: "Licorice", match: "licorice" },
  { id: "hyaluronic-acid", label: "Hyaluronic Acid", match: "hyaluronic" },
  { id: "ceramide", label: "Ceramide", match: "ceramide" },
  { id: "kojic-acid", label: "Kojic Acid", match: "kojic" },
];

export type Ingredient = { name: string; desc: string; pct?: string };
export type Benefit = { title: string; desc: string };
export type Claim = { value: string; label: string };
export type Shade = { name: string; hex: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  type: string;
  /** null = ukuran kemasan belum dikonfirmasi. */
  size: string | null;
  /** null = nomor izin edar belum tersedia untuk dipublikasikan. */
  pom: string | null;
  /** null = harga belum ditetapkan; UI menampilkan "Harga menyusul". */
  price: number | null;
  resellerPrice: number | null;
  priceGroup: string;
  image: string;
  gallery: string[];
  tagline: string;
  eyebrow: string;
  summary: string;
  description: string;
  benefits: Benefit[];
  ingredients: Ingredient[];
  claims?: Claim[];
  claimNote?: string;
  howToUse: string[];
  shades?: Shade[];
  concerns: ConcernId[];
  rating: number;
  reviewCount: number;
  bestSeller?: boolean;
  isNew?: boolean;
};

export const categories: { id: ProductCategory; label: string; desc: string; items: string }[] = [
  {
    id: "face-care",
    label: "Face Care",
    desc: "Lini perawatan wajah terbaru: membersihkan, menenangkan, dan merawat barrier.",
    items: "Facial Foam · Essence Toner · Serum",
  },
  {
    id: "body-care",
    label: "Body Care",
    desc: "Rangkaian perawatan tubuh harian: cerah, lembap, aman dipakai tiap hari.",
    items: "Shower Gel · Body Lotion · Soap · Body Serum",
  },
  {
    id: "fragrance",
    label: "Fragrance",
    desc: "Extrait de parfum dengan daya tahan panjang untuk momen spesialmu.",
    items: "Your Signature Fragrance",
  },
  {
    id: "decorative",
    label: "Decorative",
    desc: "Warna dan coverage yang bikin penampilan langsung terangkat.",
    items: "Lip Tint · Lip Cream · Cushion",
  },
];

export const products: Product[] = [
  {
    slug: "centella-hydrating-facial-foam",
    name: "Centella Hydrating Facial Foam",
    category: "face-care",
    categoryLabel: "Face Care",
    type: "Facial Foam",
    size: null,
    pom: null,
    price: null,
    resellerPrice: null,
    priceGroup: "Face Care",
    image: "/products/centella-hydrating-facial-foam.png",
    gallery: [],
    tagline: "Bersih tanpa bikin kulit ketarik",
    eyebrow: "Low pH · Cleansing & hydrating",
    summary: "Sabun cuci muka low pH dengan amino acid surfactant. Membersihkan lembut sekaligus menjaga kelembapan.",
    description:
      "Pembersih wajah harian dengan pH rendah yang mendekati pH alami kulit. Memakai amino acid surfactant sebagai bahan pembersih utama, ditemani Centella Asiatica dan Licorice Extract, sehingga wajah terasa bersih tanpa efek ketarik setelah dibilas.",
    benefits: [
      { title: "Low pH", desc: "Mendekati pH alami kulit, tidak mengganggu barrier." },
      { title: "Amino Acid Surfactant", desc: "Bahan pembersih lembut, bukan sulfat keras." },
      { title: "Menenangkan", desc: "Centella Asiatica membantu meredakan kulit yang sensitif." },
      { title: "Tetap lembap", desc: "Sodium PCA dan Zinc PCA menjaga kelembapan setelah dibilas." },
    ],
    ingredients: [
      { name: "Amino Acid Surfactant", desc: "Membersihkan lembut tanpa mengikis minyak alami kulit." },
      { name: "Centella Asiatica", desc: "Membantu menenangkan kulit yang mudah bereaksi." },
      { name: "Licorice Extract", desc: "Membantu tampilan kulit lebih cerah dan merata." },
      { name: "Sodium PCA", desc: "Mengikat air agar kulit tetap lembap." },
      { name: "Zinc PCA", desc: "Membantu menjaga keseimbangan minyak di wajah." },
    ],
    howToUse: [
      "Basahi wajah, tuang seukuran biji jagung ke telapak tangan.",
      "Busakan lalu pijat lembut ke seluruh wajah, hindari area mata.",
      "Bilas sampai bersih, lanjutkan dengan essence toner.",
    ],
    concerns: ["barrier", "kering"],
    rating: 0,
    reviewCount: 0,
    isNew: true,
  },
  {
    slug: "centella-niacin-hydrating-essence-toner",
    name: "71 Centella Niacin Hydrating Essence Toner",
    category: "face-care",
    categoryLabel: "Face Care",
    type: "Essence Toner",
    size: null,
    pom: null,
    price: null,
    resellerPrice: null,
    priceGroup: "Face Care",
    image: "/products/centella-niacin-hydrating-essence-toner.png",
    gallery: [],
    tagline: "Calming & hydrating barrier-support",
    eyebrow: "Essence toner harian",
    summary: "Essence toner bertekstur ringan dengan Centella dan Niacinamide untuk menenangkan sekaligus melembapkan.",
    description:
      "Toner bertekstur essence yang menyiapkan kulit sebelum langkah berikutnya. Kombinasi Centella, Niacinamide, dan Ceramide Complex membantu menenangkan kulit sambil mendukung barrier, dengan Hyaluronic Acid yang mengunci kelembapan.",
    benefits: [
      { title: "Calming", desc: "Centella membantu menenangkan kulit setelah aktivitas harian." },
      { title: "Hydrating", desc: "Tekstur essence yang ringan dan cepat meresap." },
      { title: "Barrier support", desc: "Ceramide Complex membantu menjaga pertahanan kulit." },
      { title: "Merata", desc: "Niacinamide membantu tampilan warna kulit lebih merata." },
    ],
    ingredients: [
      { name: "Centella Asiatica", desc: "Menenangkan kulit yang kemerahan atau mudah bereaksi." },
      { name: "Niacinamide", desc: "Membantu meratakan warna kulit dan memperbaiki barrier." },
      { name: "Licorice", desc: "Membantu tampilan kulit lebih cerah." },
      { name: "Collagen", desc: "Membantu kulit terasa lebih kenyal." },
      { name: "Ceramide Complex", desc: "Mendukung lapisan pelindung kulit." },
      { name: "Hyaluronic Acid", desc: "Mengunci kelembapan lebih lama." },
    ],
    howToUse: [
      "Pakai setelah mencuci muka, saat kulit masih setengah lembap.",
      "Tuang 2–3 pump ke telapak tangan, tepuk lembut ke seluruh wajah.",
      "Lanjutkan dengan serum dan pelembap.",
    ],
    concerns: ["kering", "barrier", "merata"],
    rating: 0,
    reviewCount: 0,
    isNew: true,
  },
  {
    slug: "booster-whitening-barrier-serum",
    name: "Booster Whitening Barrier Serum",
    category: "face-care",
    categoryLabel: "Face Care",
    type: "Serum Wajah",
    size: "30 ml",
    pom: null,
    price: null,
    resellerPrice: null,
    priceGroup: "Face Care",
    image: "/products/booster-whitening-barrier-serum.png",
    gallery: [],
    tagline: "Whitening & barrier repair",
    eyebrow: "Niacinamide 7% · Alpha Arbutin 2%",
    summary: "Serum wajah dengan Niacinamide 7% dan Alpha Arbutin 2% untuk mencerahkan sambil merawat barrier.",
    description:
      "Serum wajah yang mengerjakan dua hal sekaligus: membantu mencerahkan tampilan kulit lewat Niacinamide 7% dan Alpha Arbutin 2%, sekaligus menjaga kelembapan dan barrier lewat Pentavitin dan Licorice.",
    benefits: [
      { title: "Mencerahkan", desc: "Niacinamide 7% membantu meratakan warna kulit." },
      { title: "Menyamarkan noda", desc: "Alpha Arbutin 2% membantu memudarkan tampilan noda hitam." },
      { title: "Barrier repair", desc: "Membantu menjaga pertahanan kulit tetap sehat." },
      { title: "Lembap tahan lama", desc: "Pentavitin mengikat kelembapan sampai berjam-jam." },
    ],
    ingredients: [
      { name: "Niacinamide", desc: "Meratakan warna kulit dan memperbaiki barrier.", pct: "7%" },
      { name: "Alpha Arbutin", desc: "Membantu menyamarkan noda dan bekas jerawat.", pct: "2%" },
      { name: "Licorice", desc: "Membantu tampilan kulit lebih cerah secara alami." },
      { name: "Pentavitin", desc: "Menjaga kelembapan kulit lebih lama." },
    ],
    howToUse: [
      "Pakai setelah essence toner, pagi dan malam.",
      "Teteskan 3–4 tetes, ratakan ke seluruh wajah.",
      "Pagi hari, tutup dengan sunscreen.",
    ],
    concerns: ["noda", "merata", "barrier"],
    rating: 0,
    reviewCount: 0,
    isNew: true,
  },
  {
    slug: "advanced-brightening-shower-gel",
    name: "Advanced Brightening Shower Gel",
    category: "body-care",
    categoryLabel: "Body Care",
    type: "Shower Gel",
    size: "300 gram",
    pom: "NA18260700903",
    price: 60000,
    resellerPrice: 31250,
    priceGroup: "Advanced Brightening Body Wash",
    image: "/products/advanced-brightening-shower-gel.png",
    gallery: [
      "/gallery/advanced-brightening-shower-gel-1.jpg",
      "/gallery/advanced-brightening-shower-gel-2.jpg",
    ],
    tagline: "Glow-nya mulai dari kamar mandi",
    eyebrow: "Deeply cleanses & brightens",
    summary: "Sabun mandi no-SLES yang membersihkan menyeluruh tanpa bikin kulit ketarik.",
    description:
      "Diformulasikan lembut untuk dipakai setiap hari. Membersihkan kulit secara menyeluruh sekaligus membantu menjaga kulit tetap nyaman dan lembut, dengan Licorice, Vitamin E, dan Panthenol.",
    benefits: [
      { title: "Deep Cleansing", desc: "Membersihkan kotoran dan minyak menyeluruh." },
      { title: "Skin Barrier Friendly", desc: "Menjaga kelembapan agar kulit tetap nyaman." },
      { title: "Gentle Formula", desc: "No-SLES, aman untuk pemakaian harian." },
      { title: "Paraben Free", desc: "Tanpa paraben, lebih aman untuk kulit." },
    ],
    ingredients: [
      { name: "Licorice", desc: "Membantu mencerahkan kulit secara alami." },
      { name: "Vitamin E", desc: "Menutrisi dan menghidrasi, menjaga elastisitas kulit." },
      { name: "Panthenol", desc: "Melembapkan dan membantu menjaga skin barrier." },
    ],
    claims: [
      { value: "85%", label: "kulit terlihat lebih cerah" },
      { value: "80%", label: "kulit terasa lebih lembap" },
    ],
    claimNote: "Hasil survei uji konsumen A&G Cosmetics.",
    howToUse: [
      "Basahi kulit, tuang shower gel ke tangan atau spons.",
      "Usap lembut ke seluruh tubuh sampai berbusa.",
      "Bilas sampai bersih, lanjutkan dengan body lotion.",
    ],
    concerns: ["kusam", "kering"],
    rating: 4.8,
    reviewCount: 214,
    bestSeller: true,
  },
  {
    slug: "whitening-booster-body-lotion",
    name: "Whitening Booster Body Lotion",
    category: "body-care",
    categoryLabel: "Body Care",
    type: "Body Lotion",
    size: "250 gram",
    pom: "NA18260105586",
    price: 60000,
    resellerPrice: 31250,
    priceGroup: "Whitening Booster Body Lotion",
    image: "/products/whitening-booster-body-lotion.png",
    gallery: [
      "/gallery/whitening-booster-body-lotion-1.jpg",
      "/gallery/whitening-booster-body-lotion-2.jpg",
    ],
    tagline: "Booster lotion pertama dengan UV Filter",
    eyebrow: "Brightens · Nourishes · Moisturizes",
    summary: "Lotion booster dengan UV Filter, PDRN, dan Alpha Arbutin. Cepat meresap, non sticky.",
    description:
      "Body lotion yang diformulasikan untuk mencerahkan sekaligus menjaga kelembapan kulit sepanjang hari. UV Filter membantu melindungi kulit dari paparan sinar UV harian, jadi rutinitas pagi kamu cukup satu produk.",
    benefits: [
      { title: "Brightening", desc: "Membantu kulit terlihat lebih cerah dan bercahaya." },
      { title: "Nourishing", desc: "Menjaga kulit tetap sehat, halus, dan ternutrisi." },
      { title: "Moisturizing", desc: "Menjaga kelembapan kulit sepanjang hari." },
      { title: "Non Sticky", desc: "Tekstur ringan, cepat meresap, tidak lengket." },
    ],
    ingredients: [
      { name: "UV Filter", desc: "Membantu melindungi kulit dari paparan sinar UV harian." },
      { name: "Licorice", desc: "Membantu mencerahkan tampilan kulit." },
      { name: "Niacinamide", desc: "Membantu meratakan warna kulit." },
      { name: "Alpha Arbutin", desc: "Membantu menyamarkan noda hitam." },
      { name: "Hyaluronic Acid", desc: "Mengunci kelembapan lebih lama." },
    ],
    howToUse: [
      "Pakai setelah mandi saat kulit masih setengah kering.",
      "Ratakan ke seluruh tubuh, fokus ke area yang kering.",
      "Ulangi pagi dan malam untuk hasil optimal.",
    ],
    concerns: ["kusam", "kering", "merata"],
    rating: 4.9,
    reviewCount: 178,
    bestSeller: true,
  },
  {
    slug: "niajic-brightening-soap",
    name: "Niajic Brightening Soap",
    category: "body-care",
    categoryLabel: "Body Care",
    type: "Soap",
    size: "70 gram",
    pom: "NA18260500475",
    price: 30000,
    resellerPrice: 12500,
    priceGroup: "Niajic Brightening Soap",
    image: "/products/niajic-brightening-soap.png",
    gallery: ["/gallery/niajic-brightening-soap-1.jpg", "/gallery/niajic-brightening-soap-2.jpg"],
    tagline: "Dull skin saviour",
    eyebrow: "Bersih · Cerah · Segar setiap hari",
    summary: "Sabun pencerah harian dengan Kojic Acid dan Niacinamide. Cocok untuk semua jenis kulit.",
    description:
      "Sabun batang untuk membersihkan, merawat, dan membantu kulit tampak lebih cerah dan sehat setiap hari. Formula lembut yang tetap nyaman dipakai harian tanpa membuat kulit kering.",
    benefits: [
      { title: "Brightens", desc: "Membantu kulit tampak lebih cerah dan merata." },
      { title: "Deep Cleansing", desc: "Mengangkat kotoran tanpa bikin kulit ketarik." },
      { title: "Moisturizing", desc: "Menjaga kelembapan setelah dibilas." },
      { title: "Gentle for Daily Use", desc: "Aman dipakai setiap hari, semua jenis kulit." },
    ],
    ingredients: [
      { name: "Licorice Extract", desc: "Membantu mencerahkan dan menyamarkan noda hitam." },
      { name: "Niacinamide", desc: "Membantu memperbaiki skin barrier dan meratakan warna kulit." },
      { name: "Kojic Acid", desc: "Membantu menyamarkan hiperpigmentasi dan noda bekas." },
      { name: "Olive Oil", desc: "Melembapkan dan menutrisi, membuat kulit lebih halus." },
    ],
    howToUse: [
      "Basahi sabun dan usapkan sampai berbusa.",
      "Ratakan ke tubuh, diamkan sebentar, lalu bilas.",
      "Pakai 1–2 kali sehari.",
    ],
    concerns: ["kusam", "noda"],
    rating: 4.7,
    reviewCount: 132,
  },
  {
    slug: "pdrn-booster-body-serum",
    name: "PDRN Booster Body Serum",
    category: "body-care",
    categoryLabel: "Body Care",
    type: "Body Serum",
    size: "30 ml",
    pom: "NA18260108013",
    price: 60000,
    resellerPrice: 31250,
    priceGroup: "PDRN Booster Body Serum",
    image: "/products/pdrn-booster-body-serum.png",
    gallery: ["/gallery/pdrn-booster-body-serum-1.jpg", "/gallery/pdrn-booster-body-serum-2.jpg"],
    tagline: "18%++ premium active ingredients",
    eyebrow: "First booster serum",
    summary: "Body serum dengan PDRN Booster dan Alpha Arbutin untuk kulit tubuh yang lebih cerah merata.",
    description:
      "Serum tubuh dengan kombinasi PDRN Booster dan Alpha Arbutin. Konsentrat aktif 18%++ untuk membantu mencerahkan, menyamarkan pori, dan meratakan warna kulit tubuh.",
    benefits: [
      { title: "Mencerahkan", desc: "Membantu kulit tubuh tampak lebih cerah merata." },
      { title: "Menyamarkan pori", desc: "Membantu tampilan pori terlihat lebih halus." },
      { title: "Menyamarkan flek", desc: "Membantu memudarkan tampilan noda hitam." },
      { title: "Cepat meresap", desc: "Tekstur serum ringan, langsung nyaman di kulit." },
    ],
    ingredients: [
      { name: "Alpha Arbutin", desc: "Membantu mencerahkan dan menyamarkan noda.", pct: "10%" },
      { name: "Niacinamide", desc: "Meratakan warna kulit dan memperbaiki barrier.", pct: "5%" },
      { name: "PDRN", desc: "Membantu menjaga kulit tampak sehat dan kenyal.", pct: "2%" },
      { name: "Tranexamic Acid & Hyaluronic Acid", desc: "Menyamarkan noda dan mengunci kelembapan.", pct: "1%" },
    ],
    claims: [
      { value: "95%", label: "setuju kulit lebih cerah" },
      { value: "90%", label: "setuju pori lebih tersamarkan" },
      { value: "92%", label: "setuju flek lebih tersamarkan" },
    ],
    claimNote: "Hasil uji pemakaian pada 50 orang selama 1 bulan.",
    howToUse: [
      "Tuang 2–3 tetes ke area yang ingin dirawat.",
      "Usap merata sampai meresap, sebelum body lotion.",
      "Pakai malam hari untuk hasil paling terasa.",
    ],
    concerns: ["noda", "merata", "pori"],
    rating: 4.9,
    reviewCount: 96,
    isNew: true,
  },
  {
    slug: "golden-brezze-extrait-de-parfum",
    name: "Golden Brezze Extrait De Parfum",
    category: "fragrance",
    categoryLabel: "Fragrance",
    type: "Extrait De Parfum",
    size: "30 ml",
    pom: "NA18260604669",
    price: 60000,
    resellerPrice: 31250,
    priceGroup: "Extrait De Parfum",
    image: "/products/golden-brezze-extrait-de-parfum.png",
    gallery: ["/gallery/extrait-de-parfum-1.jpg", "/gallery/extrait-de-parfum-2.jpg"],
    tagline: "Elegance in every scent",
    eyebrow: "Warm floral woody",
    summary: "Wangi hangat elegan dengan sentuhan floral dan kayu. Tahan lama untuk momen spesial.",
    description:
      "Extrait de parfum dengan karakter hangat dan feminin. Dibuka dengan ginger dan green leaves, berkembang ke tuberose dan jasmine, lalu ditutup musk dan sandalwood yang tahan lama.",
    benefits: [
      { title: "Long-Lasting", desc: "Konsentrasi extrait, wanginya bertahan lebih lama." },
      { title: "Premium Quality", desc: "Komposisi parfum dengan bahan pilihan." },
      { title: "Elegant & Refined", desc: "Karakter wangi yang dewasa dan tidak tajam." },
      { title: "Luxurious", desc: "Kesan mewah tanpa harga mewah." },
    ],
    ingredients: [
      { name: "Top Notes", desc: "Ginger, green leaves, carnation." },
      { name: "Middle Notes", desc: "Tuberose, jasmine." },
      { name: "Bottom Notes", desc: "Musk, sandalwood." },
    ],
    howToUse: [
      "Semprot ke titik nadi: pergelangan tangan, belakang leher.",
      "Jangan digosok agar struktur wanginya tetap utuh.",
      "Simpan di tempat sejuk dan jauh dari sinar matahari.",
    ],
    concerns: [],
    rating: 4.8,
    reviewCount: 74,
  },
  {
    slug: "rosi-glow-extrait-de-parfum",
    name: "Rosi Glow Extrait De Parfum",
    category: "fragrance",
    categoryLabel: "Fragrance",
    type: "Extrait De Parfum",
    size: "30 ml",
    pom: "NA18260606731",
    price: 60000,
    resellerPrice: 31250,
    priceGroup: "Extrait De Parfum",
    image: "/products/rosi-glow-extrait-de-parfum.png",
    gallery: ["/gallery/extrait-de-parfum-2.jpg", "/gallery/extrait-de-parfum-1.jpg"],
    tagline: "Elegance in every scent",
    eyebrow: "Fresh floral fruity",
    summary: "Wangi segar dengan pembuka pear dan bergamot, ditutup amber dan musk yang lembut.",
    description:
      "Extrait de parfum dengan karakter segar dan cerah. Pembukanya pear, tea, dan bergamot, berkembang ke rose dan jasmine sambac, lalu mendarat di amber, musk, dan vetiver.",
    benefits: [
      { title: "Long-Lasting", desc: "Konsentrasi extrait, wanginya bertahan lebih lama." },
      { title: "Premium Quality", desc: "Komposisi parfum dengan bahan pilihan." },
      { title: "Fresh & Feminine", desc: "Cocok untuk pemakaian siang dan kerja." },
      { title: "Luxurious", desc: "Kesan mewah tanpa harga mewah." },
    ],
    ingredients: [
      { name: "Top Notes", desc: "Pear, tea, bergamot, lemon." },
      { name: "Middle Notes", desc: "Rose, jasmine sambac, orange flower, violet." },
      { name: "Bottom Notes", desc: "Amber, peach, musk, cedar, tonka bean, vetiver." },
    ],
    howToUse: [
      "Semprot ke titik nadi: pergelangan tangan, belakang leher.",
      "Jangan digosok agar struktur wanginya tetap utuh.",
      "Simpan di tempat sejuk dan jauh dari sinar matahari.",
    ],
    concerns: [],
    rating: 4.8,
    reviewCount: 68,
  },
  {
    slug: "glaze-nude-veil-lip-tint",
    name: "Glaze Nude Veil Lip Tint",
    category: "decorative",
    categoryLabel: "Decorative",
    type: "Lip Tint",
    size: "3 gram",
    pom: "NA18261301540",
    price: 40000,
    resellerPrice: 18750,
    priceGroup: "Lip Series (Lip Tint & Lip Cream)",
    image: "/products/glaze-nude-veil-lip-tint.png",
    gallery: ["/gallery/lip-tint-1.jpg", "/gallery/lip-tint-2.jpg"],
    tagline: "Glazed lips like a fairy",
    eyebrow: "Shiny · Plumped · Comfy",
    summary: "Lip tint glossy nude yang bikin bibir tampak lebih penuh dan lembap sepanjang hari.",
    description:
      "Bibir berkilau dan tampak lebih penuh sepanjang hari dengan kenyamanan maksimal. Tekstur ringan yang tidak lengket, cocok dipakai tumpuk maupun sendiri.",
    benefits: [
      { title: "Shiny & Plumped", desc: "Kilau basah dengan efek bibir tampak lebih penuh." },
      { title: "Hydrating & Comfy", desc: "Melembapkan, tidak bikin bibir kering." },
      { title: "Lightweight", desc: "Ringan di bibir, nyaman dipakai lama." },
    ],
    ingredients: [
      { name: "Lip Plumping Complex", desc: "Membantu bibir tampak lebih penuh." },
      { name: "Moisturizing Agent", desc: "Menjaga bibir tetap lembap dan nyaman." },
    ],
    claims: [
      { value: "40%", label: "peningkatan kelembapan setelah 1 jam" },
      { value: "5,2%", label: "peningkatan volume bibir dalam 28 hari" },
    ],
    claimNote: "Hasil uji instrumental produk lip series A&G Cosmetics.",
    howToUse: [
      "Aplikasikan dari tengah bibir ke arah luar.",
      "Tumpuk satu lapis lagi untuk warna lebih pekat.",
    ],
    shades: [
      { name: "Glaze Nude", hex: "#C98A85" },
      { name: "Fairy Pink", hex: "#B32B4E" },
    ],
    concerns: ["makeup"],
    rating: 4.7,
    reviewCount: 156,
    bestSeller: true,
  },
  {
    slug: "fairy-pink-blush-lip-tint",
    name: "Fairy Pink Blush Lip Tint",
    category: "decorative",
    categoryLabel: "Decorative",
    type: "Lip Tint",
    size: "3 gram",
    pom: "NA18261301541",
    price: 40000,
    resellerPrice: 18750,
    priceGroup: "Lip Series (Lip Tint & Lip Cream)",
    image: "/products/fairy-pink-blush-lip-tint.png",
    gallery: ["/gallery/lip-tint-2.jpg", "/gallery/lip-tint-1.jpg"],
    tagline: "Plumped. Hydrated. Perfected.",
    eyebrow: "Brightens · Plumps · Nourishes",
    summary: "Lip tint pink cerah dengan hasil glossy dan efek bibir lebih penuh.",
    description:
      "Warna pink segar yang langsung mengangkat wajah. Formulanya melembapkan dan membantu bibir tampak lebih penuh, jadi cukup satu produk untuk look sehari-hari.",
    benefits: [
      { title: "Brightens", desc: "Warna pink yang mencerahkan tampilan wajah." },
      { title: "Plumps", desc: "Bibir tampak lebih penuh dan bervolume." },
      { title: "Moisturizes", desc: "Menjaga bibir lembap, tidak pecah-pecah." },
      { title: "Nourish", desc: "Merawat bibir selama dipakai." },
    ],
    ingredients: [
      { name: "Lip Plumping Complex", desc: "Membantu bibir tampak lebih penuh." },
      { name: "Moisturizing Agent", desc: "Menjaga bibir tetap lembap dan nyaman." },
    ],
    howToUse: [
      "Aplikasikan tipis untuk hasil natural.",
      "Tumpuk di bagian tengah bibir untuk efek gradasi.",
    ],
    shades: [
      { name: "Fairy Pink", hex: "#B32B4E" },
      { name: "Glaze Nude", hex: "#C98A85" },
    ],
    concerns: ["makeup"],
    rating: 4.8,
    reviewCount: 143,
  },
  {
    slug: "nude-silk-whisper-lip-cream",
    name: "Nude Silk Whisper Lip Cream",
    category: "decorative",
    categoryLabel: "Decorative",
    type: "Lip Cream",
    size: "3 gram",
    pom: "NA18261301595",
    price: 40000,
    resellerPrice: 18750,
    priceGroup: "Lip Series (Lip Tint & Lip Cream)",
    image: "/products/nude-silk-whisper-lip-cream.png",
    gallery: ["/gallery/lip-cream-1.jpg"],
    tagline: "Lightweight matte lipcream",
    eyebrow: "15H long lasting · Non transfer",
    summary: "Lip cream matte nude yang ringan, pigmented, dan tahan sampai 15 jam.",
    description:
      "Satu sapuan warna yang langsung mencerahkan wajah dan mengangkat mood sepanjang hari. Hasil matte halus yang tetap nyaman, tidak berat, dan tidak mudah transfer.",
    benefits: [
      { title: "Lightweight", desc: "Nyaman di bibir, tidak terasa berat." },
      { title: "Matte Smooth Finish", desc: "Hasil matte halus dan rata." },
      { title: "Pigmented", desc: "Warna pekat hanya dengan satu sapuan." },
      { title: "Blurring Effect", desc: "Bibir tampak lebih halus dan mulus." },
    ],
    ingredients: [
      { name: "Soft Matte Base", desc: "Memberi hasil matte tanpa bikin bibir kaku." },
      { name: "Moisturizing Agent", desc: "Menjaga bibir tetap nyaman selama dipakai." },
    ],
    howToUse: [
      "Aplikasikan satu lapis dari tengah ke ujung bibir.",
      "Diamkan beberapa detik sampai set untuk hasil non transfer.",
    ],
    shades: [
      { name: "Silk Nude Whisper", hex: "#B5714F" },
      { name: "Cherry Muse", hex: "#8E1B25" },
    ],
    concerns: ["makeup"],
    rating: 4.7,
    reviewCount: 121,
  },
  {
    slug: "cherry-muse-lip-cream",
    name: "Cherry Muse Lip Cream",
    category: "decorative",
    categoryLabel: "Decorative",
    type: "Lip Cream",
    size: "3 gram",
    pom: "NA18261301797",
    price: 40000,
    resellerPrice: 18750,
    priceGroup: "Lip Series (Lip Tint & Lip Cream)",
    image: "/products/cherry-muse-lip-cream.png",
    gallery: ["/gallery/lip-cream-1.jpg"],
    tagline: "Lightweight matte lipcream",
    eyebrow: "15H long lasting · Non transfer",
    summary: "Lip cream matte merah cherry yang pigmented dan tahan sampai 15 jam.",
    description:
      "Merah cherry yang bikin penampilan langsung terangkat. Tekstur ringan dengan hasil matte yang rata dan tahan lama, cocok untuk acara maupun konten.",
    benefits: [
      { title: "Rich Color Payoff", desc: "Warna pekat sekali sapu." },
      { title: "Matte Smooth Finish", desc: "Hasil matte halus dan rata." },
      { title: "Long Lasting", desc: "Bertahan sampai 15 jam pemakaian." },
      { title: "Non Transfer", desc: "Tidak mudah menempel di gelas atau masker." },
    ],
    ingredients: [
      { name: "Soft Matte Base", desc: "Memberi hasil matte tanpa bikin bibir kaku." },
      { name: "Moisturizing Agent", desc: "Menjaga bibir tetap nyaman selama dipakai." },
    ],
    howToUse: [
      "Rapikan garis bibir lalu isi bagian dalamnya.",
      "Diamkan sampai set sebelum minum atau makan.",
    ],
    shades: [
      { name: "Cherry Muse", hex: "#8E1B25" },
      { name: "Silk Nude Whisper", hex: "#B5714F" },
    ],
    concerns: ["makeup"],
    rating: 4.9,
    reviewCount: 187,
    bestSeller: true,
  },
  {
    slug: "glow-all-cover-cushion-fair-light",
    name: "Glow All Cover Cushion — Fair & Light",
    category: "decorative",
    categoryLabel: "Decorative",
    type: "Cushion",
    size: "12.5 gram",
    pom: "NA18260300699",
    price: 80000,
    resellerPrice: 50000,
    priceGroup: "Glow All Cover Cushion",
    image: "/products/glow-all-cover-cushion-fair-light.png",
    gallery: ["/gallery/glow-all-cover-cushion-1.jpg"],
    tagline: "Flawless coverage, glowy complexion",
    eyebrow: "For fair & light skin tone",
    summary: "Cushion bertekstur ringan dengan coverage halus dan hasil akhir glowy sampai 24 jam.",
    description:
      "Cushion dengan tekstur ringan yang memberikan coverage halus dan merata, menyamarkan pori dengan hasil akhir kulit lebih cerah, terawat, dan bercahaya sepanjang hari.",
    benefits: [
      { title: "Flawless Coverage", desc: "Menyamarkan noda dan ketidaksempurnaan kulit." },
      { title: "Glowy Complexion", desc: "Memberi efek kulit cerah dan bercahaya alami." },
      { title: "Long-Lasting 24 Jam", desc: "Tahan lama tanpa cakey atau berminyak." },
      { title: "Lightweight Texture", desc: "Ringan, nyaman, cocok untuk pemakaian harian." },
    ],
    ingredients: [
      { name: "Skin Tint Complex", desc: "Coverage halus dengan hasil akhir dewy." },
      { name: "Moisturizing Agent", desc: "Menjaga kulit tetap lembap selama dipakai." },
    ],
    howToUse: [
      "Tekan puff ke cushion, jangan digosok.",
      "Tepuk merata dari tengah wajah ke arah luar.",
      "Tumpuk tipis di area yang butuh coverage lebih.",
    ],
    shades: [
      { name: "Shade Pearl", hex: "#F0D3BA" },
      { name: "Deep Skin Tone", hex: "#C99270" },
    ],
    concerns: ["makeup", "merata"],
    rating: 4.8,
    reviewCount: 109,
  },
  {
    slug: "glow-all-cover-cushion-deep",
    name: "Glow All Cover Cushion — Deep",
    category: "decorative",
    categoryLabel: "Decorative",
    type: "Cushion",
    size: "12.5 gram",
    pom: "NA18260300736",
    price: 80000,
    resellerPrice: 50000,
    priceGroup: "Glow All Cover Cushion",
    image: "/products/glow-all-cover-cushion-deep.png",
    gallery: ["/gallery/glow-all-cover-cushion-1.jpg"],
    tagline: "Flawless coverage, glowy complexion",
    eyebrow: "For deep skin tone",
    summary: "Shade deep dengan coverage halus, hasil glowy, dan daya tahan sampai 24 jam.",
    description:
      "Shade untuk kulit deep dengan tekstur ringan dan coverage merata. Menyamarkan pori dan memberi hasil akhir kulit bercahaya tanpa terlihat berat.",
    benefits: [
      { title: "Flawless Coverage", desc: "Menyamarkan noda dan ketidaksempurnaan kulit." },
      { title: "Glowy Complexion", desc: "Memberi efek kulit cerah dan bercahaya alami." },
      { title: "Long-Lasting 24 Jam", desc: "Tahan lama tanpa cakey atau berminyak." },
      { title: "Dermatologically Tested", desc: "Sudah diuji dermatologis, non-comedogenic." },
    ],
    ingredients: [
      { name: "Skin Tint Complex", desc: "Coverage halus dengan hasil akhir dewy." },
      { name: "Moisturizing Agent", desc: "Menjaga kulit tetap lembap selama dipakai." },
    ],
    howToUse: [
      "Tekan puff ke cushion, jangan digosok.",
      "Tepuk merata dari tengah wajah ke arah luar.",
      "Tumpuk tipis di area yang butuh coverage lebih.",
    ],
    shades: [
      { name: "Deep Skin Tone", hex: "#C99270" },
      { name: "Shade Pearl", hex: "#F0D3BA" },
    ],
    concerns: ["makeup", "merata"],
    rating: 4.8,
    reviewCount: 87,
  },
];

/** Produk yang harganya sudah ditetapkan — dipakai komponen yang menghitung total. */
export type PricedProduct = Product & { price: number };

export function pricedProducts(): PricedProduct[] {
  return products.filter((p): p is PricedProduct => p.price !== null);
}

/** Tipe produk unik, urut sesuai urutan katalog. */
export function productTypes(): string[] {
  return [...new Set(products.map((p) => p.type))];
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function relatedProducts(slug: string, limit = 4) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = products.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Tabel harga company profile (section 07 Pricing). */
export const priceList = [
  { name: "Lip Series (Lip Tint & Lip Cream)", retail: 40000, reseller: 18750 },
  { name: "Glow All Cover Cushion", retail: 80000, reseller: 50000 },
  { name: "Whitening Booster Body Lotion", retail: 60000, reseller: 31250 },
  { name: "Advanced Brightening Body Wash", retail: 60000, reseller: 31250 },
  { name: "Extrait De Parfum", retail: 60000, reseller: 31250 },
  { name: "Niajic Brightening Soap", retail: 30000, reseller: 12500 },
  { name: "PDRN Booster Body Serum", retail: 60000, reseller: 31250 },
];

export const priceNote =
  "Pengambilan produk di atas 3 lusin mendapat diskon 5%. Pengambilan di atas 3 lusin dan seterusnya mendapatkan diskon tambahan.";
