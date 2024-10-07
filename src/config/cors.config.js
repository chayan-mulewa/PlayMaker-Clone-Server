const CORS_CONFIG = {
  LOCAL_ORIGIN: process.env.CORS_LOCAL_ORIGIN || 5000,
  ONLINE_ORIGIN: process.env.CORS_ONLINE_ORIGIN || "Server",
};

module.exports = CORS_CONFIG;
