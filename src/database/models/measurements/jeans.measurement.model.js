const { mongoose, model, Schema } = require("mongoose");

const jeansMeasurementSchema = new Schema(
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
    waist: {
      type: Number,
      required: [true, "Waist size is required"],
      min: [50, "Waist size must be at least 50 cm"],
      max: [180, "Waist size cannot exceed 180 cm"],
    },
    hip: {
      type: Number,
      required: [true, "Hip size is required"],
      min: [60, "Hip size must be at least 60 cm"],
      max: [180, "Hip size cannot exceed 180 cm"],
    },
    inseam: {
      type: Number,
      required: [true, "Inseam is required"],
      min: [70, "Inseam size must be at least 70 cm"],
      max: [90, "Inseam size cannot exceed 90 cm"],
    },
    outseam: {
      type: Number,
      min: [100, "Outseam width must be at least 100 cm"],
      max: [120, "Outseam width cannot exceed 120 cm"],
      default: null,
    },
    frontRise: {
      type: Number,
      min: [22, "Front Rise must be at least 22 cm"],
      max: [35, "Front Rise cannot exceed 35 cm"],
      default: null,
    },
    backRise: {
      type: Number,
      min: [27, "Back Rise must be at least 27 cm"],
      max: [36, "Back Rise cannot exceed 36 cm"],
      default: null,
    },
    thighWidth: {
      type: Number,
      min: [50, "Thigh Width must be at least 50 cm"],
      max: [75, "Thigh Width cannot exceed 75 cm"],
      default: null,
    },
    kneeWidth: {
      type: Number,
      min: [32, "Knee Width must be at least 32 cm"],
      max: [50, "Knee Width cannot exceed 50 cm"],
      default: null,
    },
    legOpening: {
      type: Number,
      min: [18, "Leg Opening must be at least 18 cm"],
      max: [30, "Leg Opening cannot exceed 30 cm"],
      default: null,
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

jeansMeasurementSchema.index({ userId: 1, profileName: 1 });

jeansMeasurementSchema.pre("save", function (next) {
  // Add logic here for any preprocessing, logging, etc.
  next();
});

const JeansMeasurement = model("JeansMeasurement", jeansMeasurementSchema);

module.exports = JeansMeasurement;
