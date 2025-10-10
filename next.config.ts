import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: "/petergriffinsr-github-io.vercel.app",
  basePath: "/petergriffinsr-github-io.vercel.app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;