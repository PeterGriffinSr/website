import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: "/codezz-ops.vercel.app",
  basePath: "/codezz-ops.vercel.app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;