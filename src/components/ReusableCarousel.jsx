import React, { useRef } from "react";
import Slider from "react-slick";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";

const ReusableCarousel = ({ title, itemsToShow, slides }) => {
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
    <div className="w-full max-w-screen-g lg:px-20 mx-auto pt-20 p-4 ">
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
          <div key={index} className=" lg:px-16 overflow-hidden  ">
            <img
              src={slide.imageUrl}
              alt={slide.name}
              className="w-full  object-contain bg-less rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="flex justify-evenly items-end bg-non  h-max py-5 rounded-br-xl rounded-bl-xl ">
              <div className="flex  flex-col  items-start gap-1">
                <p className="mt-2 text-center font-semibold">{slide.name}</p>
                <p className="text-center">{slide.price}</p>
                <p className="text-center">{slide.tag}</p>
                <button className="border-2 border-stroke p-2 rounded-xl">
                  Get Now
                </button>
              </div>
              <div className="">
                <p className="text-center  text-2xl lg:text-3xl font-semibold ">
                  {slide.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReusableCarousel;