import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: "/petergriffinsr.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;