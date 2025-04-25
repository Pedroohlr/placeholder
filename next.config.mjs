/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',               
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
