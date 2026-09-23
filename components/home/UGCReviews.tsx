import Image from "next/image";
import { SectionHeading } from "@/components/layout/SectionHeading";

/**
 * Deret ulasan bergaya konten pelanggan. Empat kartu vertikal dengan kutipan
 * pendek di atas foto.
 *
 * CATATAN: nama, kutipan, dan foto di bawah adalah contoh layout — bukan
 * pelanggan asli. Ganti dengan konten pelanggan beserta izinnya sebelum live.
 */
const posts = [
  {
    image: "/editorial/ugc-1.jpg",
    quote: "Dipakai tiap mandi, tiga minggu kulit lengan jadi lebih rata.",
    name: "Dina",
    city: "Bandung",
    product: "Advanced Brightening Shower Gel",
  },
  {
    image: "/editorial/ugc-2.jpg",
    quote: "Cepat meresap. Pagi sebelum kerja pun nggak lengket.",
    name: "Rara",
    city: "Surabaya",
    product: "Whitening Booster Body Lotion",
  },
  {
    image: "/editorial/ugc-3.jpg",
    quote: "Seneng karena wanginya lembut, nggak kayak wangi obat.",
    name: "Sabrina",
    city: "Jakarta",
    product: "Niajic Brightening Soap",
  },
  {
    image: "/editorial/ugc-4.jpg",
    quote: "Serumnya ringan, dipakai malam bangun-bangun kulit lembap.",
    name: "Asti",
    city: "Semarang",
    product: "PDRN Booster Body Serum",
  },
];

export function UGCReviews() {
  return (
    <section className="section-y">
      <div className="container-ag flex flex-col gap-10">
        <SectionHeading
          eyebrow="Kata bestie"
          title="Dipakai harian, bukan"
          accent="sekali coba"
          desc="Contoh layout ulasan. Akan diganti dengan konten pelanggan asli beserta izinnya."
        />
        <ul className="grid grid-cols-2 gap-4 desktop:grid-cols-4 desktop:gap-6">
          {posts.map((post) => (
            <li key={post.name} className="group flex flex-col gap-4">
              <div className="relative aspect-[9/13] overflow-hidden bg-mist">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/90 via-cocoa/55 to-transparent p-4 pt-16">
                  <p className="font-display text-body-sm italic leading-snug text-ivory desktop:text-body">
                    &ldquo;{post.quote}&rdquo;
                  </p>
                </div>
              </div>
              <div>
                <p className="text-body-sm font-semibold text-cocoa">
                  {post.name} · {post.city}
                </p>
                <p className="text-caption text-cocoa-soft">{post.product}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
