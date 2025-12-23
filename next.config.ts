import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Required for your Reviews
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Required for the About Page placeholder
      },
    ],
  },
};

export default nextConfig;