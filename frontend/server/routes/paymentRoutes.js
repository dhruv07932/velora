const express = require("express");

const router = express.Router();


const {
    createPayment
} = require("../controllers/paymentController");



// Create Razorpay Payment Order

router.post(
    "/create",
    createPayment
);



module.exports = router;