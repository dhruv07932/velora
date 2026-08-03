const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
    },

    description: {
      type: String,
      required: true,
    },

    rating: {
      type: String,
      default: "⭐⭐⭐⭐⭐",
    },

    reviews: {
      type: Number,
      default: 0,
    },

    discount: {
      type: String,
      default: "",
    },

    badge: {
      type: String,
      default: "",
    },

    delivery: {
      type: String,
      default: "",
    },

    stock: {
      type: String,
      default: "In Stock",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);