import type { NextConfig } from "next";

const isVercelBuild = process.env.npm_lifecycle_event === "build:vercel";

const nextConfig: NextConfig = {
  // `build:vercel` runs `tsc --noEmit` first. Next's duplicate checker also
  // scans the preserved Cloudflare-only db/worker sources, so skip only that
  // duplicate pass during the dedicated Vercel build.
  typescript: {
    ignoreBuildErrors: isVercelBuild,
  },
};

export default nextConfig;
