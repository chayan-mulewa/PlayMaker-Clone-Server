const { AppError } = require("../errors");
const { v2: cloudinary } = require("cloudinary");
const { file, logger } = require("../utils");

const errorHandler = async (err, req, res, next) => {
  const images = req.files;
  if (images && Object.keys(images).length > 0) {
    const imagesFile = Object.values(req.files).flat();
    for (const image of imagesFile) {
      try {
        if (file.fileExist(image.path)) {
          await file.fileDelete(image.path);
          logger.logger.info(`Image Is Deleted : ${image.path}`);
        }
      } catch (error) {
        logger.logger.error(
          `Failed To Delete File : ${image.path}`,
          error.message
        );
      }
    }
  }

  if (req.cloudinaryPublicIds && req.cloudinaryPublicIds.length > 0) {
    for (const public_id of req.cloudinaryPublicIds) {
      try {
        await cloudinary.uploader.destroy(public_id);
        logger.logger.info(`Cloudinary Image Deleted: ${public_id}`);
      } catch (error) {
        logger.logger.error(
          `Failed to delete Cloudinary image: ${public_id}`,
          error.message
        );
      }
    }
  }

  console.log(err.message);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      ...err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(500).json({
      ...err,
      message: err.message,
      stack: err.stack,
    });
  }
};

module.exports = { errorHandler };
