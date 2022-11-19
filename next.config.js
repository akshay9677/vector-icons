const UnoCSS = require("@unocss/webpack").default;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(UnoCSS());
    config.cache = false;

    return config;
  },
};

module.exports = nextConfig;
