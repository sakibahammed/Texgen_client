import type { NextConfig } from "next";

const LEGACY_PAGES: Record<string, string> = {
  index: "/",
  about: "/about",
  capabilities: "/capabilities",
  products: "/products",
  knitting: "/knitting",
  sustainability: "/sustainability",
  csr: "/csr",
  gallery: "/gallery",
  careers: "/careers",
  contact: "/contact",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async redirects() {
    return Object.entries(LEGACY_PAGES).map(([slug, destination]) => ({
      source: `/${slug}.html`,
      destination,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
