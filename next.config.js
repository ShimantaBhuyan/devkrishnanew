/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // lets phones on the local network load dev-only assets (HMR) from `next dev -H 0.0.0.0`
  allowedDevOrigins: ["192.168.1.*"],
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
