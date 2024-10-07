// app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { errorMiddleware } = require("./middlewares");
const { authRoute, userRoute, materialRoute } = require("./routes");
const { SERVER_CONFIG, CORS_CONFIG } = require("./config");

const NAME = SERVER_CONFIG.NAME;
const VERSION = SERVER_CONFIG.VERSION;

const app = express();

app.use(
  cors({
    origin: [CORS_CONFIG.LOCAL_ORIGIN, CORS_CONFIG.ONLINE_ORIGIN],
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(`/${NAME}/api/${VERSION}/auth`, authRoute);
app.use(`/${NAME}/api/${VERSION}/users`, userRoute);
app.use(`/${NAME}/api/${VERSION}/materials`, materialRoute);

app.use(errorMiddleware.errorHandler);

module.exports = { app };
