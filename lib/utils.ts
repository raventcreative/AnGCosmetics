export function cn(...classes: unknown[]) {
  return classes.filter((c): c is string => typeof c === "string" && c.length > 0).join(" ");
}

/** 60000 -> "Rp 60.000" */
export function rupiah(value: number) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
