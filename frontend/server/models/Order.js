const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({


    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },



    products:[

        {

            productId:{
                type:String,
                required:true
            },


            name:{
                type:String,
                required:true
            },


            price:{
                type:Number,
                required:true
            },


            quantity:{
                type:Number,
                required:true
            },


            image:{
                type:String
            }

        }

    ],




    // Delivery Address

    address:{

        name:{
            type:String,
            required:true
        },


        phone:{
            type:String,
            required:true
        },


        city:{
            type:String,
            required:true
        },


        pincode:{
            type:String,
            required:true
        },


        fullAddress:{
            type:String,
            required:true
        }

    },





    payment:{

        type:String,

        required:true

    },





    total:{

        type:Number,

        required:true

    },





    status:{

        type:String,

        default:"Order Placed"

    },





    deliveryDate:{

        type:Date

    },





    date:{

        type:Date,

        default:Date.now

    }


});



module.exports = mongoose.model("Order",orderSchema);