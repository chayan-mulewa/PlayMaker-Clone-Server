const { mongoose, model, Schema } = require("mongoose");

const addressSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    pincode: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    addressProfileName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    countryCode: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Address = model("Address", addressSchema);

module.exports = Address;
