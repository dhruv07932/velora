require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();


// Database Connection
connectDB();


// Middleware
app.use(cors({
    origin: "*"
}));

app.use(express.json());


// User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


// Product Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


// Order Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);


// Admin Routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);


// Razorpay Payment Disabled
// const paymentRoutes = require("./routes/paymentRoutes");
// app.use("/api/payment", paymentRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("Velora Backend Running");
});


// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});