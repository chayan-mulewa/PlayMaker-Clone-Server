const { mongoose, model, Schema } = require("mongoose");

const designSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    designId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "designType",
    },
    designType: {
      type: String,
      required: true,
      enum: [
        "ShirtDesign",
        "PoloShirtDesign",
        "CoatDesign",
        "PantDesign",
        "OvercoatDesign",
        "JeansDesign",
        "ChinosDesign",
        "ShoeDesign",
      ],
    },
  },
  { timestamps: true, versionKey: false }
);

const Design = model("Design", designSchema);

module.exports = Design;
