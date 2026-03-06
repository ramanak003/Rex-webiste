import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS === 'true' ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
