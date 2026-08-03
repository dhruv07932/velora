const Order = require("../models/Order");


// =======================
// Create Order
// =======================

exports.createOrder = async (req, res) => {

    try {

        const order = new Order({

            userId: req.user.id,

            ...req.body

        });


        const savedOrder = await order.save();


        res.status(201).json({

            message:"Order created successfully",

            order:savedOrder

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// =======================
// Get User Orders
// =======================

exports.getOrders = async(req,res)=>{

    try{


        const orders = await Order.find({

            userId:req.user.id

        }).sort({date:-1});


        res.json(orders);


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// =======================
// Get All Orders (Admin)
// =======================

exports.getAllOrders = async(req,res)=>{

    try{


        const orders = await Order.find()

        .populate("userId","name email")

        .sort({date:-1});


        res.json(orders);


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// =======================
// Get Single Order (Tracking)
// =======================

exports.getSingleOrder = async(req,res)=>{

    try{


        const order = await Order.findById(req.params.id);



        if(!order){

            return res.status(404).json({

                message:"Order not found"

            });

        }



        res.json(order);


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// =======================
// Update Order Status
// =======================

exports.updateOrderStatus = async(req,res)=>{

    try{


        const order = await Order.findByIdAndUpdate(

            req.params.id,

            {
                status:req.body.status
            },

            {
                new:true
            }

        );



        if(!order){

            return res.status(404).json({

                message:"Order not found"

            });

        }



        res.json({

            message:"Order status updated successfully",

            order

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// =======================
// Delete Delivered Order
// =======================

exports.deleteOrder = async(req,res)=>{

    try{


        const order = await Order.findById(req.params.id);



        if(!order){

            return res.status(404).json({

                message:"Order not found"

            });

        }




        if(order.status !== "Delivered"){

            return res.status(400).json({

                message:"Only delivered orders can be removed"

            });

        }




        await Order.findByIdAndDelete(req.params.id);



        res.json({

            message:"Delivered order removed successfully"

        });



    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};