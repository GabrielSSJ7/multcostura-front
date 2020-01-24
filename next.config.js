const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withCss = require("@zeit/next-css");
const nextConfig = {
  distDir: "build",
  webpack: (config, options) => {
    // modify the `config` here

    return config;
  }
};
module.exports = withPlugins([withFonts, withImages, withCss], nextConfig);
