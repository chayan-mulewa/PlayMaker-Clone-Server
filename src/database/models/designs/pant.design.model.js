const { mongoose, model, Schema } = require("mongoose");

const pantDesignSchema = new Schema(
  {
    backPocket: {
      type: String,
      enum: ["bothBackPocket", "leftBackPocket", "rightBackPocket"],
      required: true,
      trim: true,
    },
    beltLoop: {
      type: String,
      enum: ["withBeltLoop", "withoutBeltLoop"],
      required: true,
      trim: true,
    },
    button: {
      type: String,
      enum: [
        "beigeCorozoButton",
        "blueCorozoButton",
        "blackCorozoButton",
        "brownCorozoButton",
        "matchingCorozoButton",
      ],
      required: true,
      trim: true,
    },
    cuff: {
      type: String,
      enum: ["withOnePointFiveCuff", "withOnePointTwoFiveCuff", "withoutCuff"],
      required: true,
      trim: true,
    },
    frontClosure: {
      type: String,
      enum: [
        "buttonOnlyFrontClosure",
        "clipAndButtonFrontClosure",
        "clipOnlyFrontClosure",
      ],
      required: true,
      trim: true,
    },
    frontPocket: {
      type: String,
      enum: ["noneFrontPocket", "seamFrontPocket", "standardFrontPocket"],
      required: true,
      trim: true,
    },
    pleat: {
      type: String,
      enum: ["doublePleat", "singlePleat", "withoutPleat"],
      required: true,
      trim: true,
    },
    pocketButton: {
      type: String,
      enum: ["withPocketButton", "withoutPocketButton"],
      required: true,
      trim: true,
    },
  },
  { timestamp: true, versionKey: false }
);

const PantDesign = model("PantDesign", pantDesignSchema);

module.exports = PantDesign;
