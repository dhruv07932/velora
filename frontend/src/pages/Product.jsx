import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://velora-p3lg.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  return (
    <div className="products-page">

      <h1>🔥 Trending Products</h1>

      <div className="product-grid">

        {products.length > 0 ? (

          products.map((product) => (

            <ProductCard
              key={product._id}
              product={product}
            />

          ))

        ) : (

          <h2>😔 No Products Found</h2>

        )}

      </div>

    </div>
  );
};

export default Products;