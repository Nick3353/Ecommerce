import React, { useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";

const ReusableCarousel = ({ title, itemsToShow, slides }) => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: itemsToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto pt-10 p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-5">
          <button onClick={handlePrev}>
            <FaArrowAltCircleLeft color="#CCCCCC" className="text-2xl" />
          </button>
          <button onClick={handleNext}>
            <FaArrowAltCircleRight color="#CCCCCC" className="text-2xl" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img src={slide.imageUrl} alt={slide.name} className="w-full bg-less" />
            <div className="flex justify-evenly items-center  ">
              <div className="flex  flex-col  items-start">
                <p className="mt-2 text-center font-semibold">{slide.name}</p>
                <p className="text-center">{slide.price}</p>
              </div>
              <div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReusableCarousel;
