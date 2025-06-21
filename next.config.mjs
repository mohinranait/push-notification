/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  trailingSlash: true, // Important for GitHub Pages routing
  basePath: '/push-notification', // Must match your GitHub repo name

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
