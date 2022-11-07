/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  // Your Next.js config...
});
