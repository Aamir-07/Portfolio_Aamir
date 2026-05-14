/** @type {import('next').NextConfig} */
const basePath = "/Portfolio_Aamir";

const nextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
