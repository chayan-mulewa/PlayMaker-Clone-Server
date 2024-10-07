const multer = require("multer");
const { MULTER_CONFIG } = require("../config");
const { asyncHandler } = require("../utils");

const upload = multer(MULTER_CONFIG.UPLOAD);

const uploadAvatar = asyncHandler((req, res, next) => {
  upload.single(MULTER_CONFIG.NAME)(req, res, (err) => {
    if (err) {
      return next(err);
    }
    next();
  });
});

const uploadMaterials = asyncHandler((req, res, next) => {
  upload.fields([
    { name: process.env.MULTER_FIELD_NAME_MATERIAL, maxCount: 1 },
    { name: process.env.MULTER_FIELD_NAME_MATERIAL_PREVIEW, maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      return next(err);
    }
    next();
  });
});
module.exports = { uploadAvatar, uploadMaterials };
