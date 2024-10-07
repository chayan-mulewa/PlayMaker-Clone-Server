const { mongoose, model, Schema } = require("mongoose");

const materialSchema = new Schema(
  {
    materialId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "materialType",
    },
    materialType: {
      type: String,
      required: true,
      enum: [
        "ShirtMaterial",
        "PoloShirtMaterial",
        "CoatMaterial",
        "PantMaterial",
        "OvercoatMaterial",
        "JeansMaterial",
        "ChinosMaterial",
        "ShoeMaterial",
      ],
    },
  },
  { timestamps: true, versionKey: false }
);

const Material = model("Material", materialSchema);

module.exports = Material;
