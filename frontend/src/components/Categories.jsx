import React from "react";
import "./Categories.css";

const categories = [
    {
        id:1,
        name:"Mobiles",
        image:"/products/iphone.jpg"
    },
    {
        id:2,
        name:"Laptops",
        image:"/products/laptop.jpg"
    },
    {
        id:3,
        name:"Puja",
        image:"/products/mohan-bhog-ghee.jpg"
    },
    {
        id:4,
        name:"Fashion",
        image:"/products/shoes.jpg"
    },
    {
        id:5,
        name:"Gaming",
        image:"/products/keyboard.jpg"
    },
    {
        id:6,
        name:"Cameras",
        image:"/products/camera.jpg"
    },
    {
        id:7,
        name:"Accessories",
        image:"/products/headphone.jpg"
    },
    {
        id:8,
        name:"Watches",
        image:"/products/watch.jpg"
    }
];


const Categories = ({setCategory}) => {

    return (

        <section className="category-section">

            <div className="category-title">

                <h2>
                    🛍️ Shop By Category
                </h2>

                <p>
                    Find everything you need at Velora
                </p>

            </div>


            <div className="category-grid">


                <div
                    className="category-card all"
                    onClick={()=>setCategory("All")}
                >

                    <div className="all-icon">
                        🔥
                    </div>

                    <h3>
                        All Products
                    </h3>

                    <button>
                        Explore
                    </button>

                </div>



                {
                    categories.map((category)=>(

                        <div
                            className="category-card"
                            key={category.id}
                            onClick={()=>setCategory(category.name)}
                        >

                            <img
                                src={category.image}
                                alt={category.name}
                            />


                            <div className="category-info">

                                <h3>
                                    {category.name}
                                </h3>

                                <button>
                                    Explore →
                                </button>

                            </div>

                        </div>

                    ))
                }


            </div>

        </section>

    );

};

export default Categories;