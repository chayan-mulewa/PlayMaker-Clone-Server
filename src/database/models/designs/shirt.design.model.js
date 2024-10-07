const { mongoose, model, Schema } = require("mongoose");

const shirtDesignSchema = new Schema(
  {
    backCut: {
      type: String,
      enum: ["sideDartsBackCut", "sideFoldsBackCut", "standardBackCut"],
      trim: true,
    },
    backYoke: {
      type: String,
      enum: ["classicBackYoke", "classicSplitBackYoke"],
      trim: true,
    },
    button: {
      type: String,
      enum: [
        "bluePolyesterButton",
        "darkShellButton",
        "lightBluePolyesterButton",
        "whiteShellButton",
      ],
      required: true,
      trim: true,
    },
    collar: {
      type: String,
      enum: [
        "cutawayCollar",
        "fullSpreadCollar",
        "kentCollar",
        "semiSpreadCollar",
      ],
      required: true,
      trim: true,
    },
    cuffCorner: {
      type: String,
      enum: ["beveledCornerCuff", "roundedCornerCuff", "straightCornerCuff"],
      required: true,
      trim: true,
    },
    cuff: {
      type: String,
      enum: [
        "convertibleButtonCuff",
        "doubleButtonCuff",
        "frenchButtonCuff",
        "singleButtonCuff",
      ],
      required: true,
      trim: true,
    },
    fastening: {
      type: String,
      enum: [
        "hiddenButtonFastening",
        "withPlacketFastening",
        "withoutPlacketFastening",
      ],
      required: true,
      trim: true,
    },
    pocket: {
      type: String,
      enum: ["leftPocket", "nonePocket", "rightPocket", "twoPocket"],
      trim: true,
    },
    sleeve: {
      type: String,
      enum: ["longSleeve", "shortSleeve"],
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const ShirtDesign = model("ShirtDesign", shirtDesignSchema);

module.exports = ShirtDesign;
