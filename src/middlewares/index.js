const authMiddleware = require("./auth.middleware");
const multerMiddleware = require("./multer.middleware");
const requestMiddleware = require("./request.middleware");
const errorMiddleware = require("./error.middleware");

module.exports = {
  authMiddleware,
  multerMiddleware,
  requestMiddleware,
  errorMiddleware,
};
