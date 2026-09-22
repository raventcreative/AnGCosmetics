import { Button } from "@/components/ui/Button";
import { FlowerBadge } from "@/components/layout/FlowerBadge";

export default function NotFound() {
  return (
    <div className="container-ag flex flex-col items-center gap-6 py-24 text-center">
      <FlowerBadge color="cotton" className="size-32">
        <span className="font-display text-heading-1 text-blossom-deep">404</span>
      </FlowerBadge>
      <h1 className="font-display text-heading-1 text-cocoa">
        Halamannya nggak <em className="accent">ketemu</em>
      </h1>
      <p className="max-w-[46ch] text-body text-cocoa-soft">
        Mungkin tautannya sudah berubah. Coba mulai dari katalog produk, ya bestie.
      </p>
      <div className="flex flex-col gap-3 tablet:flex-row">
        <Button href="/produk">Lihat produk</Button>
        <Button href="/" variant="secondary">
          Kembali ke home
        </Button>
      </div>
    </div>
  );
}
