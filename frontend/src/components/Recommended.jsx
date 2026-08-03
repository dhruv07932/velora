import React, { useContext } from "react";
import "./Recommended.css";

import products from "../data/products";
import { CartContext } from "../context/CartContext";


const Recommended = () => {


    const { addToCart } = useContext(CartContext);


    const recommendedProducts = products.slice(0,8);



    return (

        <section className="recommended-section">


            <div className="recommended-title">

                <h2>
                    ⭐ Recommended For You
                </h2>

                <p>
                    Products you may like
                </p>

            </div>



            <div className="recommended-grid">


                {
                    recommendedProducts.map(product => (


                        <div 
                        className="recommended-card"
                        key={product.id}
                        >


                            <span className="recommend-badge">

                                🔥 Popular

                            </span>



                            <img
                                src={product.image}
                                alt={product.name}
                            />



                            <h3>

                                {product.name}

                            </h3>



                            <p className="rating">

                                {product.rating}

                            </p>



                            <div className="price-box">


                                <strong>
                                    ₹{product.price}
                                </strong>


                                <del>
                                    ₹{product.oldPrice}
                                </del>


                            </div>



                            <p className="delivery">

                                🚚 {product.delivery}

                            </p>




                            <button
                            onClick={()=>addToCart(product)}
                            >

                                🛒 Add To Cart

                            </button>



                        </div>


                    ))
                }


            </div>


        </section>

    );

};


export default Recommended;