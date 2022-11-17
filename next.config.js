/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
