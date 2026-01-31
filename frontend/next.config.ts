import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/about",
      },
      {
        source: "/phong-nghi",
        destination: "/rooms",
      },
      {
        source: "/tien-ich",
        destination: "/facilities",
      },
      {
        source: '/dich-vu',
        destination: '/services',
      },
      {
        source: "/dat-phong",
        destination: "/booking",
      },
      {
        source: "/lien-he",
        destination: "/contact",
      },
      {
      source: '/dich-vu/:slug',
      destination: '/services/:slug',
      },
    ];
  },
};

export default nextConfig;
