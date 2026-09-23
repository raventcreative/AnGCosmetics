/** Satu baris pernyataan brand di antara dua section — pengganti blok warna. */
export function Statement({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-y">
      <div className="container-ag flex flex-col items-center gap-5 text-center">
        {eyebrow && <p className="text-nav uppercase text-cocoa-soft">{eyebrow}</p>}
        <p className="max-w-[38ch] font-display text-heading-1 leading-[1.25] text-cocoa desktop:max-w-[42ch] desktop:text-display-l">
          {children}
        </p>
      </div>
    </section>
  );
}
