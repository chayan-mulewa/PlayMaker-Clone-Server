// config/cloudinary.config.js
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "dhihvabgo",
  api_key: "254972429484628",
  api_secret: "6mrDRjESOKZhhw-BhroTc44uHOQ",
});

const CLOUDINARY_CONFIG = {
  cloudinary: cloudinary,
};

module.exports = CLOUDINARY_CONFIG;
