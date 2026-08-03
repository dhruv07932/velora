const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");


// =======================
// Admin Dashboard Data
// =======================

exports.getDashboard = async (req,res)=>{

    try{


        const totalUsers = await User.countDocuments();


        const totalProducts = await Product.countDocuments();


        const totalOrders = await Order.countDocuments();



        // Calculate Total Revenue

        const revenueData = await Order.aggregate([

            {
                $group:{
                    _id:null,
                    total:{
                        $sum:"$total"
                    }
                }
            }

        ]);



        const totalRevenue = revenueData.length > 0
            ? revenueData[0].total
            : 0;



        res.json({

            totalUsers,

            totalProducts,

            totalOrders,

            totalRevenue

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};