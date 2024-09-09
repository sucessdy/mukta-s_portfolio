// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   swcMinify: true,
//   optimizeFonts: true,
//   experimental: {
//     optimizeCss: true,
//     images: {
//       allowFutureImage: true,
//     },
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
