const { mongoose, model, Schema } = require("mongoose");

const poloShirtMeasurementSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    profileName: {
      type: String,
      required: [true, "Profile name is required"],
      trim: true,
      lowercase: true,
      minlength: [2, "Profile name must be at least 2 characters long"],
      maxlength: [100, "Profile name cannot exceed 100 characters"],
      match: [
        /^[a-zA-Z0-9\s]+$/,
        "Profile name must contain only alphanumeric characters",
      ],
    },
    height: {
      type: Number,
      required: [true, "Height is required"],
      min: [120, "Height must be at least 120 cm"],
      max: [200, "Height cannot exceed 200 cm"],
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
      min: [50, "Weight must be at least 50 kg"],
      max: [150, "Weight cannot exceed 150 kg"],
    },
    bodytype: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      enum: ["slim", "fit", "average", "muscular"],
    },
    neck: {
      type: Number,
      required: [true, "Neck size is required"],
      min: [10, "Neck size must be at least 10 cm"],
      max: [60, "Neck size cannot exceed 60 cm"],
    },
    chest: {
      type: Number,
      required: [true, "Chest size is required"],
      min: [60, "Chest size must be at least 60 cm"],
      max: [200, "Chest size cannot exceed 200 cm"],
    },
    waist: {
      type: Number,
      min: [50, "Waist size must be at least 50 cm"],
      max: [180, "Waist size cannot exceed 180 cm"],
      default: null,
    },
    hip: {
      type: Number,
      min: [60, "Hip size must be at least 60 cm"],
      max: [180, "Hip size cannot exceed 180 cm"],
      default: null,
    },
    shoulderWidth: {
      type: Number,
      required: [true, "Shoulder width is required"],
      min: [30, "Shoulder width must be at least 30 cm"],
      max: [70, "Shoulder width cannot exceed 70 cm"],
    },
    sleeveLength: {
      type: Number,
      min: [40, "Sleeve length must be at least 40 cm"],
      max: [100, "Sleeve length cannot exceed 100 cm"],
      default: null,
    },
    armHole: {
      type: Number,
      min: [30, "Armhole size must be at least 30 cm"],
      max: [80, "Armhole size cannot exceed 80 cm"],
      default: null,
    },
    cuffWidth: {
      type: Number,
      min: [10, "Cuff Width size must be at least 10 cm"],
      max: [30, "Cuff Width size cannot exceed 30 cm"],
      default: null,
    },
    bicep: {
      type: Number,
      min: [20, "Bicep size must be at least 20 cm"],
      max: [70, "Bicep size cannot exceed 70 cm"],
      default: null,
    },
    sleeveOpening: {
      type: Number,
      min: [10, "Sleeve Opening must be at least 10 cm"],
      max: [30, "Sleeve Opening cannot exceed 30 cm"],
      default: null,
    },
    backLength: {
      type: Number,
      min: [60, "Back length must be at least 60 cm"],
      max: [120, "Back length cannot exceed 120 cm"],
      default: null,
    },
    frontLength: {
      type: Number,
      min: [60, "Front length must be at least 60 cm"],
      max: [120, "Front length cannot exceed 120 cm"],
      default: null,
    },
    poloShirtLength: {
      type: Number,
      required: [true, "Polo Shirt length is required"],
      min: [60, "Polo Shirt length must be at least 60 cm"],
      max: [120, "Polo Shirt length cannot exceed 120 cm"],
    },
    unit: {
      type: String,
      enum: ["cm", "inches"],
      default: "cm",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: true,
  }
);

poloShirtMeasurementSchema.index({ userId: 1, profileName: 1 });

poloShirtMeasurementSchema.pre("save", function (next) {
  // Add logic here for any preprocessing, logging, etc.
  next();
});

const PoloShirtMeasurement = model(
  "PoloShirtMeasurement",
  poloShirtMeasurementSchema
);

module.exports = PoloShirtMeasurement;
