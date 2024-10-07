// database/connectDB.js
const mongoose = require("mongoose");
const { DATABASE } = require("../config");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(DATABASE.ONLINE);
    console.log(
      `MongoDB Connected on URL :- ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB Connection Failed :- ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };
