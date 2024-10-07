const path = require("path");
const file = require("./file.util");
const logger = require("./logger.util");
const { CLOUDINARY_CONFIG } = require("../config");
const { AppError, InvalidFieldError } = require("../errors");

// Helper function to handle single file upload
const uploadFile = async (localFilePath) => {
  const validExtensions = [".jpg", ".jpeg"];
  const ext = path.extname(localFilePath).toLowerCase();

  // Check if file exists
  if (!(await file.fileExist(localFilePath))) {
    logger.logger.error(`File does not exist: ${localFilePath}`);
    throw new AppError("File does not exist", 400);
  }

  // Validate file extension
  if (!validExtensions.includes(ext)) {
    logger.logger.error(`Invalid file extension: ${localFilePath}`);
    throw new InvalidFieldError("Avatar", "Invalid file extension");
  }

  // Upload the file to Cloudinary
  const response = await CLOUDINARY_CONFIG.cloudinary.uploader.upload(
    localFilePath,
    { resource_type: "auto" }
  );

  // Clean up the local file after upload
  await file.fileDelete(localFilePath);
  logger.logger.info(`Local file deleted: ${localFilePath}`);

  return response;
};

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) {
    throw new AppError("No file path provided", 400);
  }

  try {
    // Check if input is an array (multiple files) or a single string (one file)
    if (Array.isArray(localFilePath)) {
      // Handle multiple files
      const uploadResults = [];
      for (const filePath of localFilePath) {
        const result = await uploadFile(filePath);
        uploadResults.push(result);
      }
      return uploadResults;
    } else {
      // Handle single file
      return await uploadFile(localFilePath);
    }
  } catch (error) {
    logger.logger.error(`Error during file upload: ${error.message}`, error);
    throw error;
  }
};

module.exports = { uploadOnCloudinary };
