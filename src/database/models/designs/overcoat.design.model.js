const { mongoose, model, Schema } = require("mongoose");

const overcoatDesignSchema = new Schema(
  {
    lapelButtonHole: {
      type: String,
      enum: ["decorativeLapelButtonHole", "workingLapelButtonHole"],
      required: true,
      trim: true,
    },
    lapelStyle: {
      type: String,
      enum: ["notchLapelStyle", "peakLapelStyle", "shawlLapelStyle"],
      required: true,
      trim: true,
    },
    lapelWidth: {
      type: String,
      enum: ["slimTwoPointFiveInchLapelWidth", "standardThreeInchLapelWidth"],
      required: true,
      trim: true,
    },
    pocketStyle: {
      type: String,
      enum: [
        "slantedFlappedPocketStyle",
        "slantedPipedPocketStyle",
        "straightFlappedPocketStyle",
        "straightPipedPocketStyle",
      ],
      required: true,
      trim: true,
    },
    sleeveButtonNumber: {
      type: String,
      enum: ["fourSleeveButtonNumber", "threeSleeveButtonNumber"],
      required: true,
      trim: true,
    },
    sleeveButton: {
      type: String,
      enum: [
        "kissingNoneWorkingSleeveButton",
        "kissingWorkingSleeveButton",
        "standardNoneWorkingSleeveButton",
        "standardWorkingSleeveButton",
      ],
      required: true,
      trim: true,
    },
    style: {
      type: String,
      enum: [
        "doubleBreastedWithTwoButtonStyle",
        "singleBreastedWithOneButtonStyle",
        "singleBreastedWithThreeButtonStyle",
        "singleBreastedWithTwoButtonStyle",
      ],
      required: true,
      trim: true,
    },
    ticketPocket: {
      type: String,
      enum: ["withTicketPocket", "withoutTicketPocket"],
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const OvercoatDesign = model("OvercoatDesign", overcoatDesignSchema);

module.exports = OvercoatDesign;
