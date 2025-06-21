/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true, 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/push-notification',
};

export default nextConfig;
