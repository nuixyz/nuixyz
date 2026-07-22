import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 90]
  },
  allowedDevOrigins: ["192.168.1.4"]
};

export default nextConfig;
