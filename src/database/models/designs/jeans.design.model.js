const { mongoose, model, Schema } = require("mongoose");

const jeansDesignSchema = new Schema(
  {
    backPocket: {
      type: String,
      enum: [
        "classicBackPocket",
        "roundBackPocket",
        "squareBackPocket",
        "unbrandBackPocket",
      ],
      required: true,
      trim: true,
    },
    cuff: {
      type: String,
      enum: ["classicCuff", "rolledUpCuff"],
      required: true,
      trim: true,
    },
    finishing: {
      type: String,
      enum: ["classicFinishing", "cleanFinishing", "vintageFinishing"],
      required: true,
      trim: true,
    },
    fit: {
      type: String,
      enum: ["bootcutFit", "skinnyFit", "straightFit", "slimFit"],
      required: true,
      trim: true,
    },
    fly: {
      type: String,
      enum: ["buttonFly", "zipperFly"],
      required: true,
      trim: true,
    },
    frontPocket: {
      type: String,
      enum: ["classicFrontPocket", "workerFrontPocket"],
      required: true,
      trim: true,
    },
    length: {
      type: String,
      enum: ["classicLength", "cropLength"],
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const JeansDesign = model("JeansDesign", jeansDesignSchema);

module.exports = JeansDesign;
