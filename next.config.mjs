/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-domain.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
