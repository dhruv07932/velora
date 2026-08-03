import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    rating: "",
    stock: "",
    description: ""
  });


  useEffect(() => {

    const fetchProduct = async () => {

      const res = await fetch(
        `https://velora-p3lg.onrender.com/api/products/${id}`
      );

      const data = await res.json();

      setProduct(data);

    };

    fetchProduct();

  }, [id]);



  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };



  const updateProduct = async (e) => {

    e.preventDefault();


    await fetch(
      `https://velora-p3lg.onrender.com/api/products/${id}`,
      {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(product)
      }
    );


    alert("Product Updated");


    navigate("/admin/products");

  };



  return (

    <div>

      <h1>✏️ Edit Product</h1>


      <form onSubmit={updateProduct}>


        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />


        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
        />


        <input
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
        />


        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image"
        />


        <input
          name="rating"
          value={product.rating}
          onChange={handleChange}
          placeholder="Rating"
        />


        <input
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock"
        />


        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />


        <button>
          Update Product
        </button>


      </form>


    </div>

  );

};


export default EditProduct;