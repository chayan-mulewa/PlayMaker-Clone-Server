const { mongoose, model, Schema } = require("mongoose");

const overcoatMaterialSchema = new Schema(
  {
    materialName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    materialCode: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    materialFabric: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    materialColor: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    materialType: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    materialDescription: {
      type: String,
      required: false,
      trim: true,
    },
    materialPricePerMeter: {
      type: Number,
      required: false,
      default: 0,
    },
    materialGSM: {
      type: Number,
      required: true,
    },
    materialProperties: [
      {
        type: String,
        required: false,
        lowercase: true,
        trim: true,
      },
    ],
    materialSeasonability: [
      {
        type: String,
        required: false,
        lowercase: true,
        trim: true,
      },
    ],
    materialPattern: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    weavePattern: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    threadCount: {
      type: String,
      required: false,
      trim: true,
    },
    tags: [
      {
        type: String,
        required: false,
        trim: true,
        lowercase: true,
      },
    ],
    materialURL: {
      type: String,
      trim: true,
      required: true,
    },
    materialPreviewURL: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const OvercoatMaterial = model("OvercoatMaterial", overcoatMaterialSchema);

module.exports = OvercoatMaterial;
