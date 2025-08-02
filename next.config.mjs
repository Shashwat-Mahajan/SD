/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any experimental features that might cause issues
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Basic optimizations that work well with Vercel
  poweredByHeader: false,
  // Ensure proper image handling
  images: {
    domains: [], // Add any external image domains here if needed
  },
  // Clean webpack config for better builds
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure proper client-side bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
