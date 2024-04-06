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
    speed: 999,
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
      <div className="">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className=" px-2 lg:px-14 overflow-hidden  ">
              <img
                src={slide.imageUrl}
                alt={slide.name}
                className="w-full h-40  object-contain bg-less rounded-tr-2xl rounded-tl-2xl"
              />
              <div className="flex justify-evenly items-end bg-non  h-max p-1 rounded-br-xl rounded-bl-xl ">
                <div className="flex  flex-col  items-start gap-1">
                  <p className="mt-2 text-center font-semibold">{slide.name}</p>
                  <p className="text-center font-medium">{slide.price}</p>
                  <p className="text- ">{slide.tag}</p>
                  <button className="border-2 border-stroke p-1 rounded-xl font-semibold">
                    Get Now
                  </button>
                </div>
                <div className="">
                  <p className="text-center  text-3xl lg:text-3xl font-semibold ">
                    {slide.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReusableCarousel;