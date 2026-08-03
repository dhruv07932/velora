const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");
const Product = require("./models/Product");
const products = require("./data/products");

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("✅ Products Imported Successfully");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedProducts();