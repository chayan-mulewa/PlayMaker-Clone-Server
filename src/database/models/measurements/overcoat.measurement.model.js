const { mongoose, model, Schema } = require("mongoose");

const overcoatMeasurementSchema = new Schema(
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
      required: [true, "Waist size is required"],
      min: [50, "Waist size must be at least 50 cm"],
      max: [180, "Waist size cannot exceed 180 cm"],
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
      required: [true, "Sleeve length is required"],
      min: [40, "Sleeve length must be at least 40 cm"],
      max: [100, "Sleeve length cannot exceed 100 cm"],
    },
    armHole: {
      type: Number,
      required: [true, "Armhole size is required"],
      min: [30, "Armhole size must be at least 30 cm"],
      max: [80, "Armhole size cannot exceed 80 cm"],
    },
    cuff: {
      type: Number,
      required: [true, "Cuff size is required"],
      min: [10, "Cuff size must be at least 10 cm"],
      max: [30, "Cuff size cannot exceed 30 cm"],
    },
    bicep: {
      type: Number,
      required: [true, "Bicep size is required"],
      min: [20, "Bicep size must be at least 20 cm"],
      max: [70, "Bicep size cannot exceed 70 cm"],
    },
    wrist: {
      type: Number,
      min: [10, "Wrist size must be at least 10 cm"],
      max: [30, "Wrist size cannot exceed 30 cm"],
      default: null,
    },
    elbow: {
      type: Number,
      min: [10, "Elbow size must be at least 10 cm"],
      max: [30, "Elbow size cannot exceed 30 cm"],
      default: null,
    },
    lapelWidth: {
      type: Number,
      min: [5, "Lapel Width must be at least 5 cm"],
      max: [15, "Lapel Width cannot exceed 15 cm"],
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
    overcoatLength: {
      type: Number,
      required: [true, "Overcoat length is required"],
      min: [60, "Overcoat length must be at least 60 cm"],
      max: [120, "Overcoat length cannot exceed 120 cm"],
    },
    unit: {
      type: String,
      enum: ["cm", "inches"],
      default: "inches",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: true,
  }
);

overcoatMeasurementSchema.index({ userId: 1, profileName: 1 });

overcoatMeasurementSchema.pre("save", function (next) {
  // Add logic here for any preprocessing, logging, etc.
  next();
});

const OvercoatMeasurement = model(
  "OvercoatMeasurement",
  overcoatMeasurementSchema
);

module.exports = OvercoatMeasurement;
