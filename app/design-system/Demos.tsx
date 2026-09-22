"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Toast, type ToastStatus } from "@/components/ui/Toast";
import { Pagination } from "@/components/ui/Pagination";
import { Cart } from "@/components/commerce/Cart";

export function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Buka modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Simpan ke wishlist?"
        primaryLabel="Simpan"
      >
        Produk ini akan kami ingat untukmu, bestie. Kamu bisa buka lagi kapan pun dari halaman akun.
      </Modal>
    </>
  );
}

export function ToastDemo() {
  const [status, setStatus] = useState<ToastStatus | null>(null);
  const messages: Record<ToastStatus, string> = {
    success: "Berhasil ditambahkan ke keranjang.",
    warning: "Stok tinggal 3 lagi, bestie.",
    error: "Kode voucher tidak dikenali. Coba cek lagi, ya.",
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        {(["success", "warning", "error"] as ToastStatus[]).map((s) => (
          <Button key={s} size="sm" variant="secondary" onClick={() => setStatus(s)}>
            Toast {s}
          </Button>
        ))}
      </div>
      {(["success", "warning", "error"] as ToastStatus[]).map((s) => (
        <Toast
          key={s}
          inline
          open={status === s}
          status={s}
          message={messages[s]}
          action={{ label: "Lihat", onClick: () => setStatus(null) }}
          onClose={() => setStatus(null)}
        />
      ))}
      {status === null && (
        <p className="text-caption text-cocoa-soft">
          Klik salah satu tombol di atas untuk melihat toast (hilang otomatis 4 detik).
        </p>
      )}
    </div>
  );
}

export function PaginationDemo() {
  const [page, setPage] = useState(2);
  return <Pagination page={page} totalPages={5} onChange={setPage} />;
}

export function CartDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Buka cart drawer
      </Button>
      <Cart open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function InputDemo() {
  const [value, setValue] = useState("");
  return (
    <div className="grid gap-4 tablet:grid-cols-3">
      <Input
        id="demo-default"
        label="Nama"
        placeholder="Nama kamu"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Input id="demo-hint" label="Kode voucher" placeholder="BESTIE5" hint="Berlaku sampai akhir bulan." />
      <Input
        id="demo-error"
        label="Email"
        placeholder="email@kamu.com"
        defaultValue="email-salah"
        error="Formatnya belum benar. Contoh: nama@email.com"
      />
    </div>
  );
}
