import React, { useRef } from "react";
import Slider from "react-slick";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";

const Carousel = ({ title, itemsToShow, slides }) => {
  const sliderRef = useRef(null);

  const Prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const Next = () => {
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
    <div className="w-full max-w-screen-g lg:px-20 mx-auto pt-20 p-10 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-5">
          <button onClick={Prev}>
            <FaArrowAltCircleLeft color="#CCCCCC" className="text-4xl" />
          </button>
          <button onClick={Next}>
            <FaArrowAltCircleRight color="#CCCCCC" className="text-4xl" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="  items-center p-5 lg:px-10 ">
            <img src={slide.imageUrl} alt={slide.name} className="w-full bg-less " />
            <div className="flex justify-evenly items-center  ">
              <div className="flex  flex-col  items-start">
                <p className="mt-2 text-center font-semibold">{slide.name}</p>
                <p className="text-center">{slide.price}</p>
              </div>
              <div className="">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;