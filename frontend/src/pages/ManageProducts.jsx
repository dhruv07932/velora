import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();


  const fetchProducts = async () => {

    const res = await fetch(
      "http://localhost:5000/api/products"
    );

    const data = await res.json();

    setProducts(data);

  };


  useEffect(() => {

    fetchProducts();

  }, []);



  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );


    if (!confirmDelete) return;


    await fetch(
      `http://localhost:5000/api/products/${id}`,
      {
        method: "DELETE",
      }
    );


    alert("Product Deleted");


    fetchProducts();

  };



  return (

    <div>

      <h1>📦 Manage Products</h1>


      {
        products.map((product) => (

          <div key={product._id}>


            <h3>
              {product.name}
            </h3>


            <p>
              ₹{product.price}
            </p>



            <button
              onClick={() => navigate(`/admin/edit-product/${product._id}`)}
            >
              ✏️ Edit
            </button>



            <button
              onClick={() => deleteProduct(product._id)}
            >
              🗑 Delete
            </button>


            <hr />


          </div>

        ))
      }


    </div>

  );

};


export default ManageProducts;