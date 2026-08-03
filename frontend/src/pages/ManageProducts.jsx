import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://velora-p3lg.onrender.com/api/products";

const ManageProducts = () => {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();


  const fetchProducts = async () => {

    try {

      const res = await fetch(API);

      const data = await res.json();

      setProducts(data);

    } 
    catch(error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchProducts();

  }, []);



  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );


    if (!confirmDelete) return;


    try {

      await fetch(
        `${API}/${id}`,
        {
          method:"DELETE",
        }
      );


      alert("Product Deleted");

      fetchProducts();

    }
    catch(error){

      console.log(error);

    }

  };



  return (

    <div>

      <h1>📦 Manage Products</h1>


      {
        products.length > 0 ? (

          products.map((product)=>(

            <div key={product._id}>


              <h3>
                {product.name}
              </h3>


              <p>
                ₹{product.price}
              </p>


              <button
                onClick={() =>
                  navigate(`/admin/edit-product/${product._id}`)
                }
              >
                ✏️ Edit
              </button>



              <button
                onClick={() =>
                  deleteProduct(product._id)
                }
              >
                🗑 Delete
              </button>


              <hr />


            </div>

          ))

        ) : (

          <h2>No Products Found</h2>

        )
      }


    </div>

  );

};


export default ManageProducts;