const express = require("express");

const router = express.Router();


const {
  createOrder,
  getOrders,
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder

} = require("../controllers/orderController");


const authMiddleware = require("../middleware/authMiddleware");




// Create new order

router.post(
  "/",
  authMiddleware,
  createOrder
);




// Get logged-in user's orders

router.get(
  "/",
  authMiddleware,
  getOrders
);




// Get all orders (Admin)

router.get(
  "/all",
  authMiddleware,
  getAllOrders
);




// Get single order (Track Order)

router.get(
  "/:id",
  authMiddleware,
  getSingleOrder
);




// Update order status (Admin)

router.put(
  "/:id",
  authMiddleware,
  updateOrderStatus
);




// Delete delivered order (Admin)

router.delete(
  "/:id",
  authMiddleware,
  deleteOrder
);



module.exports = router;