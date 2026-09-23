/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  // EXPORT=1 npm run build menghasilkan situs statis di out/ untuk preview.
  // Build biasa tetap memakai Image Optimization bawaan Next.
  ...(isExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
