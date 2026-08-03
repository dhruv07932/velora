import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./ProductCard.css";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    const { wishlist, toggleWishlist } = useContext(WishlistContext);

    const navigate = useNavigate();


    const isWishlisted = wishlist.some(
        item => item._id === product._id
    );


    return (

        <div
            className="product-card"
            onClick={() => navigate(`/product/${product._id}`)}
        >


            <div className="discount-badge">
                {product.discount || "30% OFF"}
            </div>



            {product.badge && (
                <div className="product-badge">
                    {product.badge}
                </div>
            )}



            <img
                src={product.image}
                alt={product.name}
                className="product-image"
            />



            <div className="product-info">


                <h3>
                    {product.name}
                </h3>



                <div className="rating">

                    {product.rating}

                </div>



                <div className="price-box">

                    <p className="price">
                        ₹{product.price}
                    </p>


                    <p className="old-price">
                        ₹{product.oldPrice}
                    </p>


                </div>




                <p className="stock">
                    📦 Stock: {product.stock}
                </p>




                <button
                    onClick={(e) => {

                        e.stopPropagation();

                        toggleWishlist(product);

                        toast.success(
                            "Wishlist updated"
                        );

                    }}
                >

                    {isWishlisted
                        ? "❤️ Wishlisted"
                        : "🤍 Wishlist"
                    }

                </button>





                <button
                    onClick={(e) => {

                        e.stopPropagation();

                        addToCart(product);

                        toast.success(
                            "Product added to cart"
                        );

                    }}
                >

                    🛒 Add to Cart

                </button>



            </div>


        </div>

    );

};


export default ProductCard;