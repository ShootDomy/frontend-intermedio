import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL(
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/**"
      ),
    ],
  },
};

export default nextConfig;
