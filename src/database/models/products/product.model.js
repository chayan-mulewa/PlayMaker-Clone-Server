const { mongoose, model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    materialId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "Material",
    },
    designId: {
      type: mongoose.Schema.Types.Mixed,
      ref: "Design",
      required: true,
    },
    measurementId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Measurement",
      required: true,
    },
    subTotalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = model("Product", productSchema);

module.exports = Product;
