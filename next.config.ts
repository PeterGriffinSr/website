import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: "/",
  basePath: ""
};

export default nextConfig;