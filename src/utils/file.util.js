const fs = require("fs");
const { logger } = require("./logger.util");

const fileDelete = async (filePath) => {
  try {
    await fs.unlinkSync(filePath);
  } catch (err) {
    logger.error(`Error deleting file: ${filePath}`, err.message);
    return;
  }
};

const fileExist = async (filePath) => {
  try {
    await fs.existsSync(filePath);
    return true;
  } catch (err) {
    logger.error(`Error finding file: ${filePath}`, err.message);
    return false;
  }
};

module.exports = { fileExist, fileDelete };
