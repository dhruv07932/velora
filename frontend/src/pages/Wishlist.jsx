import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {

    const { wishlist } = useContext(WishlistContext);

    return (

        <div style={{ padding: "30px" }}>

            <h1>❤️ My Wishlist</h1>

            {
                wishlist.length === 0 ? (

                    <h3>No products in wishlist.</h3>

                ) : (

                    wishlist.map((item) => (

                        <div
                            key={item.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                                marginBottom: "20px",
                                border: "1px solid #ddd",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                width="120"
                            />

                            <div>

                                <h2>{item.name}</h2>

                                <h3>₹{item.price}</h3>

                            </div>

                        </div>

                    ))

                )
            }

        </div>

    );

};

export default Wishlist;