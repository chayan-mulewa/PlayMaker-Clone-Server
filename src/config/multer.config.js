// config/multer.config.js
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.MULTER_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(10, function (err, bytes) {
      const fileName = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fileName);
    });
  },
});

const MULTER_CONFIG = {
  UPLOAD: {
    storage: storage,
    limits: {
      fileSize: 1048576,
    },
  },
  NAME: process.env.MULTER_FIELD_NAME,
};

module.exports = MULTER_CONFIG;
