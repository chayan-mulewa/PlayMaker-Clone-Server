const { mongoose, model, Schema } = require("mongoose");

const chinosDesignSchema = new Schema(
  {
    backPocket: {
      type: String,
      enum: ["classicBackPocket", "patchBackPocket", "weltBackPocket"],
      required: true,
      trim: true,
    },
    cargoPocket: {
      type: String,
      enum: ["noneCargoPocket", "withCargoPocket"],
      required: true,
      trim: true,
    },
    fastening: {
      type: String,
      enum: ["classicFastening", "drawstringFastening", "offCenterFastening"],
      required: true,
      trim: true,
    },
    fit: {
      type: String,
      enum: ["classicFit", "relaxedFit", "taperedFit"],
      required: true,
      trim: true,
    },
    frontPocket: {
      type: String,
      enum: ["scoopFrontPocket", "slantFrontPocket"],
      required: true,
      trim: true,
    },
    hemline: {
      type: String,
      enum: ["classicHemline", "rollUpHemline"],
      required: true,
      trim: true,
    },
    length: {
      type: String,
      enum: ["ankleLength", "bermudaLength", "classicLength"],
      required: true,
      trim: true,
    },
    pleat: {
      type: String,
      enum: ["nonePleat", "withPleat"],
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const ChinosDesign = model("ChinosDesign", chinosDesignSchema);

module.exports = ChinosDesign;
