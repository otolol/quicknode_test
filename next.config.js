/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
