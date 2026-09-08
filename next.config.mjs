/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "the-gallery-new.vercel.app" },
      { protocol: "https", hostname: "inky3.github.io" },
    ],
  },
};

export default nextConfig;
