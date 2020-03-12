const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withCss = require("@zeit/next-css");
const nextConfig = {
  distDir: "build",
  webpack: (config, options) => {
    // modify the `config` here

    return config;
  },
  env: {
  	imageExtensionPermitted: ['jpg', 'JPG', 'png', 'webp', 'svg', 'jpeg'],
  	videoExtensionPermitted: ['mp4', 'ogg', 'avi', 'gif'],
  	mapsKey: "ArBcF40dX4IT5Co3SIxT7TfvEqq3VNdafH09G2lYGLmm1PvaaFwU-xHaQLjtmpDe",
  	initialMapPosition: { lat:-13.6634315, lng: -69.6385312 }
  }
};
module.exports = withPlugins([withFonts, withImages, withCss], nextConfig);
