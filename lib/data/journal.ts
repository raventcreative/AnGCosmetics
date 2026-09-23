export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  cover: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "urutan-body-care-biar-glow-nya-kelihatan",
    category: "Rutinitas",
    title: "Urutan body care biar glow-nya kelihatan",
    excerpt:
      "Bukan soal beli banyak produk. Urutan yang benar bikin hasilnya kelihatan lebih cepat.",
    readTime: "4 menit baca",
    date: "12 September 2026",
    cover: "/editorial/ritual-hands.jpg",
    body: [
      {
        paragraphs: [
          "Bestie, banyak yang merasa produknya nggak kerja padahal urutannya yang kebalik. Prinsipnya sederhana: bersihkan dulu, rawat dengan yang paling encer, lalu tutup dengan yang paling kaya.",
        ],
      },
      {
        heading: "1. Bersihkan tanpa bikin kulit ketarik",
        paragraphs: [
          "Mulai dari shower gel yang lembut. Advanced Brightening Shower Gel kami no-SLES dan paraben free, jadi kulit bersih tanpa rasa kesat. Kalau kamu lebih suka sabun batang, Niajic Brightening Soap punya Kojic Acid dan Niacinamide untuk kulit yang gampang kusam.",
        ],
      },
      {
        heading: "2. Rawat dengan serum di area prioritas",
        paragraphs: [
          "Serum punya molekul aktif paling terkonsentrasi, jadi dipakai sebelum lotion. PDRN Booster Body Serum punya 18%++ bahan aktif; cukup 2–3 tetes di area yang paling ingin kamu ratakan warnanya.",
        ],
      },
      {
        heading: "3. Tutup dengan lotion, pagi jangan skip UV",
        paragraphs: [
          "Whitening Booster Body Lotion punya UV Filter, jadi rutinitas paginya cukup sampai langkah ini. Malam, pakai lotion lagi setelah serum supaya kelembapannya terkunci sampai besok pagi.",
        ],
        list: [
          "Pagi: shower gel → lotion (ada UV Filter)",
          "Malam: shower gel atau soap → serum → lotion",
          "Konsisten minimal 4 minggu sebelum menilai hasil",
        ],
      },
    ],
  },
  {
    slug: "baca-nomor-bpom-sebelum-checkout",
    category: "Edukasi",
    title: "Cara baca nomor BPOM sebelum checkout",
    excerpt:
      "Nomor POM bukan pajangan. Ini cara cepat memastikan produk yang kamu beli memang terdaftar.",
    readTime: "3 menit baca",
    date: "5 September 2026",
    cover: "/editorial/texture-serum.jpg",
    body: [
      {
        paragraphs: [
          "Setiap produk kosmetik yang dijual legal di Indonesia wajib punya nomor notifikasi BPOM. Di A&G, nomor itu kami tulis terbuka di halaman produk dan kemasan — bukan cuma logo BPOM di gambar.",
        ],
      },
      {
        heading: "Langkahnya cuma tiga",
        paragraphs: [
          "Buka cekbpom.pom.go.id, pilih pencarian berdasarkan nomor registrasi, lalu masukkan nomor yang tertera. Kalau nama produk dan produsennya muncul sesuai kemasan, berarti produkmu terdaftar.",
        ],
        list: [
          "NA18260700903 — Advanced Brightening Shower Gel",
          "NA18260105586 — Whitening Booster Body Lotion",
          "NA18260500475 — Niajic Brightening Soap",
          "NA18260108013 — PDRN Booster Body Serum",
        ],
      },
      {
        heading: "Waspada klaim berlebihan",
        paragraphs: [
          "Produk yang menjanjikan \"putih dalam seminggu\" biasanya bermasalah di klaim atau di bahan. Kami memilih menulis klaim yang bisa dibuktikan: hasil survei konsumen, kandungan resmi, dan nomor izin edar.",
        ],
      },
    ],
  },
  {
    slug: "kenalan-sama-pdrn-dan-alpha-arbutin",
    category: "Kandungan",
    title: "Kenalan sama PDRN dan Alpha Arbutin",
    excerpt:
      "Dua bahan yang paling sering ditanya bestie. Ini fungsinya, dan kenapa kami pakai keduanya.",
    readTime: "5 menit baca",
    date: "28 Agustus 2026",
    cover: "/editorial/skin-detail.jpg",
    body: [
      {
        paragraphs: [
          "Skincare itu bukan sihir, cuma kimia yang bekerja pelan. Dua bahan di rangkaian booster kami punya tugas yang berbeda, dan justru saling melengkapi.",
        ],
      },
      {
        heading: "Alpha Arbutin: meratakan warna kulit",
        paragraphs: [
          "Alpha Arbutin membantu menyamarkan noda hitam dan hiperpigmentasi dengan cara menghambat pembentukan pigmen berlebih. Di PDRN Booster Body Serum, kadarnya 10% — cukup tinggi untuk produk tubuh, dan tetap kami pasangkan dengan pelembap agar tidak terasa kering.",
        ],
      },
      {
        heading: "PDRN: menjaga kulit tampak sehat",
        paragraphs: [
          "PDRN dikenal di perawatan asal Korea untuk membantu kulit tampak lebih kenyal dan terawat. Di formula kami kadarnya 2%, ditemani Niacinamide 5% serta Tranexamic Acid dan Hyaluronic Acid 1%.",
        ],
      },
      {
        heading: "Cara pakai yang realistis",
        paragraphs: [
          "Pakai malam, konsisten, dan beri waktu satu siklus kulit sekitar 28 hari. Hasil uji pemakaian pada 50 orang selama 1 bulan: 95% setuju kulit lebih cerah, 92% setuju flek lebih tersamarkan.",
        ],
      },
    ],
  },
  {
    slug: "lip-tint-vs-lip-cream-pilih-yang-mana",
    category: "Makeup",
    title: "Lip tint vs lip cream, pilih yang mana?",
    excerpt:
      "Dua-duanya bagus, tapi untuk momen yang berbeda. Ini cara memilihnya dalam 30 detik.",
    readTime: "3 menit baca",
    date: "20 Agustus 2026",
    cover: "/editorial/ugc-3.jpg",
    body: [
      {
        paragraphs: [
          "Pertanyaan paling sering masuk DM: beda lip tint dan lip cream A&G itu apa? Jawabannya ada di hasil akhir dan seberapa lama kamu di luar rumah.",
        ],
      },
      {
        heading: "Pilih lip tint kalau mau glossy dan lembap",
        paragraphs: [
          "Glaze Nude Veil dan Fairy Pink Blush punya hasil berkilau dengan efek bibir tampak lebih penuh. Uji instrumental kami mencatat peningkatan kelembapan 40% setelah 1 jam pemakaian. Cocok untuk daily look dan konten close up.",
        ],
      },
      {
        heading: "Pilih lip cream kalau butuh tahan lama",
        paragraphs: [
          "Nude Silk Whisper dan Cherry Muse punya hasil matte halus, pigmented, dan tahan sampai 15 jam dengan efek non transfer. Ini pilihan untuk acara panjang, seharian meeting, atau live.",
        ],
        list: [
          "Butuh glossy dan lembap → lip tint",
          "Butuh matte dan tahan lama → lip cream",
          "Mau dua-duanya → tint dulu di tengah bibir, cream di garis luar",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
