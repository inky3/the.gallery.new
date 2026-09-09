/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "the-gallery-new.vercel.app" },
      { protocol: "https", hostname: "inky3.github.io" },
    ],
  },
};

export default nextConfig;