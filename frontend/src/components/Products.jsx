import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
import Loader from "../components/Loader";

import "./Products.css";


const Products = ({ category = "All" }) => {


  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(()=>{


    const getProducts = async()=>{


      try{


        const res = await axios.get(
          "https://velora-p3lg.onrender.com/api/products"
        );


        console.log("ALL PRODUCTS:", res.data);


        setProducts(res.data);



      }
      catch(error){


        console.log("Product Error:", error);


      }
      finally{


        setLoading(false);


      }


    };


    getProducts();


  },[]);





  if(loading){

    return <Loader />;

  }





  const showProducts = category === "All"

    ? products

    : products.filter(
        item => item.category === category
      );





  return (

    <section className="products-section">


      <h2>
        🔥 Trending Products
      </h2>




      {

        showProducts.length > 0 ?


        (

          <div className="products-grid">


            {

              showProducts.map((product)=>(


                <ProductCard

                  key={product._id}

                  product={product}

                />


              ))

            }


          </div>

        )


        :


        (

          <div className="no-product">


            <h2>
              😔 No Products Found
            </h2>


            <p>
              Try searching another product
            </p>


          </div>

        )


      }



    </section>

  );

};


export default Products;