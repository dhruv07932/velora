import React from "react";
import "./Deals.css";


const deals = [

    {
        id:1,
        name:"Apple iPhone 15 Pro Max",
        price:"₹99999",
        oldPrice:"₹129999",
        offer:"23% OFF",
        rating:"⭐⭐⭐⭐⭐",
        delivery:"Free Delivery Tomorrow",
        image:"/src/assets/products/iphone.jpg"
    },

    {
        id:2,
        name:"Premium Gaming Laptop",
        price:"₹49999",
        oldPrice:"₹59999",
        offer:"17% OFF",
        rating:"⭐⭐⭐⭐⭐",
        delivery:"Free Delivery",
        image:"/src/assets/products/laptop.jpg"
    },

    {
        id:3,
        name:"Wireless Headphones",
        price:"₹1999",
        oldPrice:"₹2999",
        offer:"33% OFF",
        rating:"⭐⭐⭐⭐⭐",
        delivery:"Delivery Tomorrow",
        image:"/src/assets/products/headphone.jpg"
    },

    {
        id:4,
        name:"Professional Camera",
        price:"₹45999",
        oldPrice:"₹59999",
        offer:"24% OFF",
        rating:"⭐⭐⭐⭐⭐",
        delivery:"Free Delivery",
        image:"/src/assets/products/camera.jpg"
    }

];


const Deals = () => {

    return (

        <section className="deals-section">


            <div className="deals-title">

                <h2>
                    🔥 Today's Deals
                </h2>

                <button>
                    View All
                </button>

            </div>



            <div className="deals-grid">


                {
                    deals.map((item)=>(


                        <div 
                        className="deal-card"
                        key={item.id}
                        >


                            <div className="discount">

                                {item.offer}

                            </div>



                            <img
                                src={item.image}
                                alt={item.name}
                            />



                            <h3>
                                {item.name}
                            </h3>



                            <p className="rating">

                                {item.rating}

                            </p>



                            <div className="price">


                                <strong>
                                    {item.price}
                                </strong>


                                <del>
                                    {item.oldPrice}
                                </del>


                            </div>



                            <p className="delivery">

                                🚚 {item.delivery}

                            </p>



                            <button className="buy-btn">

                                Buy Now

                            </button>



                        </div>


                    ))
                }


            </div>


        </section>

    );

};


export default Deals;