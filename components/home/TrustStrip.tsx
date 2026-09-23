import { achievements } from "@/lib/data/company";

/** Empat bukti, dibariskan tipis dengan garis pemisah — tanpa blok warna. */
export function TrustStrip() {
  return (
    <section className="rule-top">
      <div className="container-ag">
        <ul className="grid divide-y divide-hairline tablet:grid-cols-2 tablet:divide-y-0 desktop:grid-cols-4 desktop:divide-x">
          {achievements.map((item, i) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 py-8 tablet:px-6 desktop:py-12 tablet:first:pl-0 desktop:last:pr-0"
            >
              <span className="text-nav uppercase text-blossom-deep">0{i + 1}</span>
              <h3 className="font-sans text-title text-cocoa">{item.title}</h3>
              <p className="text-body-sm text-cocoa-soft">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
