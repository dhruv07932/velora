import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {

  const [product, setProduct] = useState({
    name:"",
    price:"",
    oldPrice:"",
    discount:"",
    category:"",
    image:"",
    rating:"",
    reviews:"",
    stock:"",
    description:"",
  });



  const handleChange = (e)=>{

    setProduct({

      ...product,

      [e.target.name]:e.target.value

    });

  };




  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      const response = await fetch(

       "https://velora-p3lg.onrender.com/api/products"

        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },

          body:JSON.stringify(product)

        }

      );



      const data = await response.json();



      if(response.ok){


        alert("✅ Product Added Successfully!");



        setProduct({

          name:"",
          price:"",
          oldPrice:"",
          discount:"",
          category:"",
          image:"",
          rating:"",
          reviews:"",
          stock:"",
          description:"",

        });


      }
      else{


        alert(
          data.message || "Product Add Failed"
        );


      }



    }
    catch(error){


      console.log(error);


      alert("Server Error");


    }


  };





  return (

    <div className="add-product">


      <div className="form-container">


        <h1>
          ➕ Add Product
        </h1>




        <form onSubmit={handleSubmit}>


          <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          />



          <input
          type="number"
          name="price"
          placeholder="Selling Price"
          value={product.price}
          onChange={handleChange}
          required
          />



          <input
          type="number"
          name="oldPrice"
          placeholder="Old Price"
          value={product.oldPrice}
          onChange={handleChange}
          />



          <input
          name="discount"
          placeholder="20% OFF"
          value={product.discount}
          onChange={handleChange}
          />



          <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
          />



          <input
          name="image"
          placeholder="Image URL (/products/photo.jpg)"
          value={product.image}
          onChange={handleChange}
          required
          />



          <input
          name="rating"
          placeholder="⭐⭐⭐⭐⭐"
          value={product.rating}
          onChange={handleChange}
          />



          <input
          type="number"
          name="reviews"
          placeholder="Reviews"
          value={product.reviews}
          onChange={handleChange}
          />



          <input
          name="stock"
          placeholder="In Stock"
          value={product.stock}
          onChange={handleChange}
          required
          />



          <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          required
          />



          <button type="submit">
            Add Product
          </button>



        </form>


      </div>


    </div>

  );

};


export default AddProduct;