const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  getAllUsers
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Get All Users (Admin)
router.get("/", authMiddleware, getAllUsers);

module.exports = router;