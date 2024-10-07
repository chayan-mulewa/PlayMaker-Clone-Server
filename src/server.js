// server.js
require("dotenv").config();
const { app } = require("./app");
const { connectDB } = require("./database/index");
const { SERVER_CONFIG } = require("./config");

const PORT = SERVER_CONFIG.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on PORT :- ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB Connection Failed :- ${error.message}`);
    process.exit(1);
  });
