import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import "./ProductDetails.css";


const ProductDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);


    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await axios.get(
                    `https://velora-p3lg.onrender.com/api/products/${id}`
                );

                setProduct(response.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };


        fetchProduct();


    }, [id]);



    if (loading) {

        return <h2>Loading Product...</h2>;

    }



    if (!product) {

        return <h1>Product Not Found</h1>;

    }



    const buyNow = () => {

        addToCart(product);

        navigate("/checkout");

    };



    return (

        <div className="product-details">


            <div className="details-image">

                <img
                    src={product.image}
                    alt={product.name}
                />

            </div>



            <div className="details-info">


                <h1>
                    {product.name}
                </h1>



                <p className="details-rating">

                    ⭐ {product.rating}

                </p>



                <div className="price-box">

                    <h2>
                        ₹{product.price}
                    </h2>


                    <span className="old-price">

                        ₹{product.oldPrice}

                    </span>


                </div>



                <p className="description">

                    {product.description}

                </p>



                <p className="stock">

                    📦 Stock: {product.stock}

                </p>



                <div className="button-group">


                    <button
                        className="cart-btn"
                        onClick={() => addToCart(product)}
                    >

                        🛒 Add To Cart

                    </button>



                    <button
                        className="buy-btn"
                        onClick={buyNow}
                    >

                        ⚡ Buy Now

                    </button>


                </div>


            </div>


        </div>

    );

};


export default ProductDetails;