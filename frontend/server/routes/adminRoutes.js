const express = require("express");

const router = express.Router();

const adminMiddleware = require("../middleware/adminMiddleware");

const {
    getDashboard
} = require("../controllers/adminController");


const Order = require("../models/Order");
const User = require("../models/User");



// Dashboard Data

router.get(
    "/dashboard",
    adminMiddleware,
    getDashboard
);




// Get all users

router.get(
    "/users",
    adminMiddleware,
    async(req,res)=>{

        try{

            const users = await User.find();

            res.json(users);

        }
        catch(error){

            res.status(500).json({
                message:error.message
            });

        }

    }
);





// Get all orders

router.get(
    "/orders",
    adminMiddleware,
    async(req,res)=>{

        try{

            const orders = await Order.find()
            .sort({date:-1});


            res.json(orders);

        }
        catch(error){

            res.status(500).json({
                message:error.message
            });

        }

    }
);



module.exports = router;