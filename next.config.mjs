/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  trailingSlash: true,
};

export default nextConfig;