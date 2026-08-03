import React, { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";


const Home = () => {


    const [category, setCategory] = useState("All");



    return (

        <>


            <Hero />


            <Categories

                setCategory={setCategory}

            />



            <Products

                category={category}

            />


        </>

    );

};


export default Home;