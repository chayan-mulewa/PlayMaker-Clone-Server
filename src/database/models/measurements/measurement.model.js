const { mongoose, model, Schema } = require("mongoose");

const measurementSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    measurementId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "measurementType",
    },
    measurementType: {
      type: String,
      required: true,
      enum: [
        "ShirtMeasurement",
        "PoloShirtMeasurement",
        "CoatMeasurement",
        "PantMeasurement",
        "OvercoatMeasurement",
        "JeansMeasurement",
        "ChinosMeasurement",
        "ShoeMeasurement",
      ],
    },
  },
  { timestamps: true, versionKey: false }
);

const Measurement = model("Measurement", measurementSchema);

module.exports = Measurement;
