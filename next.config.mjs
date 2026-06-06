/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/demon-powder-coating-website",
  assetPrefix: "/demon-powder-coating-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
