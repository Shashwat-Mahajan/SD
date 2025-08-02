/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Ensure proper CSS handling for Vercel
  poweredByHeader: false,
  // Enable experimental features for better performance
  modularizeImports: {
    "@/components/ui": {
      transform: "@/components/ui/{{member}}",
    },
  },
};

export default nextConfig;
