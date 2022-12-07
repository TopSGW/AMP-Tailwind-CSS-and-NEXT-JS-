/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // images: {
  //   unoptimized: true,
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: "raw-loader",
    });

    return config;
  }, 
}

module.exports = nextConfig
