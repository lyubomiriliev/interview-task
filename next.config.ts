import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "bg"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.palmsbet.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
