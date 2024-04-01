import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCartPlus } from "react-icons/fa";
import { hero_img, hero_imge } from '../assets/index';

function SliderItem({ title, description, imageUrl }) {
  return ( 
    <div className="w-full h-60 bg-secondary-300 lg:bg-transparent  px-2 md:px-20 relative lg:w-[85%] lg:h-[100vh] md:h-[20rem] lg:-z-50">
      <div className="flex text-white items-end lg:items-center ">
        <div className="flex flex-col  gap- justify-center w-44 lg:w-1/2 lg:p-20 lg:text-textColor md:pt-10">
          <h1 className="font-bold text-5xl lg:text-9xl lg:text-secondary-300">{title}</h1>
          <h3 className="text-less text-xl  lg:pt-10">Description</h3>
          <p className="lg:text-2xl ">{description}</p>
          <div className="hidden lg:block">
          <h3 className="text-less text-xl  lg:pt-10">Sizes</h3>
          <div className="flex gap-6 text-xl " >
          <div className="">
            <input type="radio" value="Medium" className="" />
            <label>Medium</label>
          </div>
          <div className="">
            <input type="radio" value="Medium" className="" />
            <label>Large</label>
          </div>
          </div>
          </div>
          <div className="pt-5">
            <button className="flex justify-center items-center gap-2 p-2 bg-secondary-200 text-white">
              Add To Cart
              <FaCartPlus />
            </button>
          </div>
        </div>
        <div className="lg:relative ">
          <img src={imageUrl} alt="" className="absolute right-0 bottom-0 w-40 lg:relative lg:w-[40rem]  md:w-[15rem] md:right-20  " />
        </div>
      </div>
    </div>
  );
}

function LazyLoad() {
  const data = [
    {
      title: "Hoodie",
      description: "There are many variations of passages of Lorem Ipsum available",
      imageUrl: hero_img,
    },
    {
      title: "T-Shirt",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      imageUrl: hero_imge,
    },
    
  ];

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <SliderItem
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default LazyLoad;
