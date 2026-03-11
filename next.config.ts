import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS === 'true' ? 'export' : undefined,
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/Rex-webiste' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



