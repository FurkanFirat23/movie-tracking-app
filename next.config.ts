import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  },
  /* config options here */
};

export default nextConfig;
