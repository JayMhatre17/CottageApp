import React, { useState } from "react";
// Import Swiper React components

import "react-slideshow-image/dist/styles.css";
import CardSlider from "./CardSlider";

const images = [
  {
    index: 1,
    image: "../images/logo.png",
  },
  {
    index: 2,
    image: "../images/froont.jpg",
  },
  {
    index: 3,
    image: "../images/image1.jpg",
  },
  {
    index: 4,
    image: "../images/swing.jpg",
  },
  {
    index: 5,
    image: "../images/side.jpg",
  },
];
const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="relative w-full overflow-hidden h-screen ">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white text-xl px-4 py-2 rounded-l focus:outline-none z-10"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white text-xl px-4 py-2 rounded-r focus:outline-none z-10"
        >
          &#10095;
        </button>
        <div className="flex transition-transform duration-500 ease-in-out">
          {images.map((imageObj, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "slide active"
                  : "slide inactive absolute inset-0"
              }
            >
              <img
                src={imageObj.image}
                alt={`Slide ${imageObj.index}`}
                className="w-full h-screen object-cover transition-opacity duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
      <CardSlider />
    </div>
  );
};

export default HomePage;
