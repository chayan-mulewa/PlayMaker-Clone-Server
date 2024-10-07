// config/winston.config.js
const winston = require("winston");

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`;
  })
);

const WINSTON_CONFIG = {
  LEVEL: "info",
  FORMAT: logFormat,
  TRANSPORTS: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
};

module.exports = WINSTON_CONFIG;
