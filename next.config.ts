import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bellodesainstudio.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
  allowedDevOrigins: ['192.168.1.3'],
};

export default nextConfig;
