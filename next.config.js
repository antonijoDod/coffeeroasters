/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* FIX console - class did not match */
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
