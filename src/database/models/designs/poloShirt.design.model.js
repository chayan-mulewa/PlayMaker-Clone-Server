const { mongoose, model, Schema } = require("mongoose");

const poloShirtDesignSchema = new Schema(
  {
    collar: {
      type: String,
      enum: ["defaultCollar", "placketCollar", "plainColorCollar"],
      required: true,
      trim: true,
    },
    pocket: {
      type: String,
      enum: ["nonePocket", "onePocket"],
      required: true,
      trim: true,
    },
    sleeve: {
      type: String,
      enum: ["fullSleeve", "halfSleeve"],
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const PoloShirtDesign = model("PoloShirtDesign", poloShirtDesignSchema);

module.exports = PoloShirtDesign;
