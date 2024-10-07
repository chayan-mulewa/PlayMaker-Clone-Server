const { mongoose, model, Schema } = require("mongoose");
const { JWT_CONFIG } = require("../../../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: false,
      default: 0,
    },
    gender: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      enum: ["male", "female", "other"],
      default: "male",
    },
    phoneCode: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      enum: ["user", "admin"],
      default: "user",
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    carts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
      },
    ],
    addresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    measurementProfiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Measurment",
      },
    ],
    bodyShapeProfiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BodyShape",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    update.password = await bcrypt.hash(update.password, 10);
  } else if (update["$set"] && update["$set"].password) {
    update["$set"].password = await bcrypt.hash(update["$set"].password, 10);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      role: this.role,
    },
    JWT_CONFIG.ACCESS_TOKEN_SECRET,
    {
      expiresIn: JWT_CONFIG.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      role: this.role,
    },
    JWT_CONFIG.REFRESH_TOKEN_SECRET,
    {
      expiresIn: JWT_CONFIG.REFRESH_TOKEN_EXPIRY,
    }
  );
};

const User = model("User", userSchema);

module.exports = User;
