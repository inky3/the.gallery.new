/** @type {import('next').NextConfig} */
const repoBase = "/the.gallery";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",              // static export -> works on GitHub Pages, no server needed
  images: { unoptimized: true }, // required for static export
  optimizeFonts: false,          // we load Google Fonts via <link>, not build-time inlining
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? repoBase + "/" : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : "",
  },
};

export default nextConfig;
