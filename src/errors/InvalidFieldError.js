// errors/InvalidFieldError.js
const AppError = require("./AppError");

class InvalidFieldError extends AppError {
  constructor(name = "field", message = "Invalid Error", statusCode = 400) {
    super(message);
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = InvalidFieldError;
