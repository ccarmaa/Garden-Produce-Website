/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zcjkbrfiqelulixqjsjx.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;