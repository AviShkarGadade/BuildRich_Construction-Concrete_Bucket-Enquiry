import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This makes `next export` generate static HTML
  output: 'export',


  reactStrictMode: true,
};

export default nextConfig;
