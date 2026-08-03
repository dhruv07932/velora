import React, { useEffect, useState } from "react";
import "./Hero.css";

import banner1 from "../assets/products/banner1.png";
import banner2 from "../assets/products/banner2.png";
import banner3 from "../assets/products/banner3.png";

const slides = [
  {
    title: "Mega Electronics Sale",
    subtitle: "Up to 70% OFF on Mobiles, Laptops & Accessories",
    button: "Shop Now",
    image: banner1,
    bg: "linear-gradient(135deg,#131921,#232f3e)"
  },
  {
    title: "Fashion Festival",
    subtitle: "New Arrivals | Shoes, Clothing & Watches",
    button: "Explore Collection",
    image: banner2,
    bg: "linear-gradient(135deg,#5b247a,#1bcedf)"
  },
  {
    title: "Puja Essentials",
    subtitle: "Mohan Bhog Ghee & PRM Puja Oil",
    button: "Buy Now",
    image: banner3,
    bg: "linear-gradient(135deg,#ff9800,#ff5722)"
  }
];

function Hero() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      style={{ background: slides[current].bg }}
    >

      <button
        className="arrow left"
        onClick={prevSlide}
      >
        ❮
      </button>

      <div className="hero-content">

        <div className="hero-text">

          <span className="offer">
            🔥 Limited Time Offer
          </span>

          <h1>{slides[current].title}</h1>

          <p>{slides[current].subtitle}</p>

          <button className="hero-btn">
            {slides[current].button}
          </button>

        </div>

        <div className="hero-image">

          <img
            src={slides[current].image}
            alt={slides[current].title}
          />

        </div>

      </div>

      <button
        className="arrow right"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="dots">

        {slides.map((slide, index) => (

          <span
            key={index}
            className={
              current === index
                ? "dot active"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

    </section>
  );

}

export default Hero;