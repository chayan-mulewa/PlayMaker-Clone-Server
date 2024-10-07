// utils/logger.util.js
const winston = require("winston");
const { WINSTON_CONFIG } = require("../config");

// Create a Winston logger instance
const logger = winston.createLogger({
  level: WINSTON_CONFIG.LEVEL,
  format: WINSTON_CONFIG.FORMAT,
  transports: WINSTON_CONFIG.TRANSPORTS,
});

module.exports = { logger };
