/**
 * Konfigurasi satu pintu untuk tautan keluar.
 * Ganti URL marketplace di bawah dengan link toko resmi saat sudah tersedia —
 * semua tombol "Beli" di website mengambil nilainya dari sini.
 */
export const site = {
  name: "A&G Cosmetics",
  tagline: "Your Skin's Bestie.",
  description:
    "Brand kecantikan lokal sejak 2008. Affordable luxury: buatan Indonesia dengan standar Korea, BPOM dan Halal, di harga Rp 30rb sampai Rp 80rb.",
  url: "https://angcosmetics.id",
  contact: {
    person: "Lina",
    phone: "0812-7777-0737",
    waNumber: "6281277770737",
  },
  marketplace: {
    shopee: "https://shopee.co.id/", // TODO: ganti dengan link toko Shopee resmi
    tiktok: "https://www.tiktok.com/shop", // TODO: ganti dengan link TikTok Shop resmi
    tokopedia: "", // opsional
  },
  social: {
    instagram: "https://instagram.com/", // TODO: ganti dengan @ag.cosmetics resmi
    tiktok: "https://tiktok.com/", // TODO: ganti dengan akun TikTok resmi
  },
} as const;

/** Link WhatsApp dengan pesan yang sudah terisi, tone "Bestie". */
export function waLink(message: string) {
  return `https://wa.me/${site.contact.waNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Produk", href: "/produk" },
  { label: "Tentang", href: "/tentang" },
  { label: "Bestie Journal", href: "/journal" },
  { label: "Reseller", href: "/reseller" },
  { label: "Brand Guideline", href: "/brand-guideline" },
  { label: "Design System", href: "/design-system" },
] as const;
