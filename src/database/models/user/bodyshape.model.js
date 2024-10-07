const { mongoose, model, Schema } = require("mongoose");

const bodyShapeSchema = new Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    profileName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bodyShape: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    shoulders: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    stomachShape: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    upperBackShape: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    lowerBackShape: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    armPosition: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    droppedShoulder: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const BodyShape = model("BodyShape", bodyShapeSchema);

module.exports = BodyShape;
