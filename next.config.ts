import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 passou a default qualities = [75]. Liberamos níveis maiores
    // pra fotos-chave (ex.: sócios) não saírem recomprimidas demais.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
