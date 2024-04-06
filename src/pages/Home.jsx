
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import EmailInput from "../components/EmailInput";
import LazyLoad from "../components/LazyLoad";
import FooterLinks from "../components/FooterLinks";
import ReusableCarousel from "../components/ReusableCarousel";
import {
  food,
  sneaker,
  men_clothes,
  ladies_dress,
  win_kitchen,
  stores,
  casio_watch,
  iphone12,
  brown_jacket,
  hd_monitor,
  cta_img,
  Astore,
  Gplay,
  ads,
  chops,
  chops1,
  chops2,
  chops3,
  logo,
  ring,
} from "../assets/index";
import { FaCartPlus } from "react-icons/fa";
import { Trending, categoriesData, categories } from "./Homedata.js";

function Home() {
  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full">
        <LazyLoad />
      </div>
      {/* Hero Section */}

      {/* Category Section */}
      <div className="px-2 ">
        <div>
          <h1 className="text-xl font-semibold py-2">Categories</h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  bg-less">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-20 h-auto"
              />
              <p className="font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Category Section */}

      {/* Trending Sectoin  */}
      <div>
        <Carousel title="Trending" itemsToShow={4} slides={Trending} />
        <Carousel title="New Arrival" itemsToShow={4} slides={Trending} />
      </div>

      {/* CTA Section  */}

      <div className="bg-more w-max-screen-lg  flex  justify-between items-center  text-textColor relative overflow-x-hidden">
        <div className="  lg:block  ">
          <img src={cta_img} alt="" className=" absolute lg:relative top-0 -right-56 -rotate-12 lg:rotate-1 " />
        </div>
        <div className=" p-10">
          <div className="bg-white text-5xl font-bold w-max px-8 py-4  -rotate-6">
            <h1 className="rotate-6">PAYDAY</h1>
          </div>
          <div className="pt-10 flex flex-col gap-3  ">
            <h1 className="font-bold text-5xl">SALE NOW</h1>
            <p className="text-xl font-medium">
              There are many variations of passages of Lorem available
            </p>
            <h3 className="text-2xl font-semibold">1 June - 10 July 2021</h3>
            <p className=" font-medium text-xl">#Terms & Conditions apply</p>
            <div>
              <button className="flex justify-center items-center gap-2 p-2 bg-secondary-200 text-white">
                Add To Cart
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section  */}

      {/* featured Product */}
      <div>
        <ReusableCarousel
          title="Featured Products"
          itemsToShow={4}
          slides={Trending}
        />
      </div>
      {/* featured Product */}

      {/* Top Sales */}
      <div>
        <ReusableCarousel title="Top Sales" itemsToShow={4} slides={Trending} />
      </div>
      {/* Top Sales */}

      {/* CTA Section2 */}
      <div className="bg-nan w-max-screen-lg  flex  justify-evenly items-center  text-textColor relative overflow-x-hidden">
        <div className=" p-10 lg:w-1/2 relative ">
          <div className="bg-primary text-white text-5xl font-bold w-max px-8 py-4  -rotate-6">
            <h1 className="rotate-6">PAYDAY</h1>
          </div>
          <div className="pt-10 flex flex-col gap-3  ">
            <h1 className="font-bold text-3xl lg:text-5xl">
              DOWNLOAD APP & GET THE COUPON
            </h1>
            <h1 className="">
              Get 30% off on your first transaction using Winmart mobile app for
              now
            </h1>
            <div className="p flex">
              <img src={Gplay} alt="" />
              <img src={Astore} alt="" />
            </div>
          </div>
        </div>

        <div className=" hidden lg:block">
          <img src={ads} alt="" className=" " />
        </div>
      </div>
      {/* CTA Section2 */}

      {/* chob & Hubs */}
      <div className=" flex justify-evenly px-5 flex-col lg:flex-row lg:px-20 items-center gap-10 pt-10 ">
        <div className="lg:w-1/2 ">
          <h1 className="font-bold text-3xl lg:text-5xl">
            AVAILABLE STORES ON WINMART
          </h1>
          <p className="py-5">
            Get 30% off on your first transaction using Winmart mobile app for
            now
          </p>
          <button className="flex justify-center items-center gap-2 p-2 bg-secondary-200 text-white mt-10">
            Add To Cart
            <FaCartPlus />
          </button>
        </div>
        <div className="grid grid-cols-2">
          <img src={chops} alt="" />
          <img src={chops1} alt="" />
          <img src={chops2} alt="" />
          <img src={chops3} alt="" />
        </div>
      </div>
      {/* chob & Hubs */}

      {/* CTA Section 3 */}
      <div className="bg-more flex justify-center items-center text-white">
        <div className=" text-center py-20">
          <h1 className="font-bold text-3xl lg:text-5xl">
            JOIN WINMART COMMUNITY TO GET <br /> MONTHLY PROMO
          </h1>
          <p className="text-xl pt-3">
            Type your email down below and be wild for big promos
          </p>

          <div className="email flex justify-center items-center pt-10">
            <EmailInput />
          </div>
        </div>
      </div>
      {/* CTA Section 3 */}

      {/* Footer */}
      <div className="bg-black w-full h-auto text-white p-5 lg:p-20">
        <div className="flex  justify-start lg:justify-evenly flex-col lg:flex-row gap-20 ">
          <div className="">
            <img src={logo} alt="" className="lg:w-[100px]" />
            <h1>Sunyani, Ghana</h1>
          </div>
          <div>
            <FooterLinks categories={categories} />
          </div>
        </div>
      </div>
      {/* Footer */}
    </React.Fragment>
  );
}

export default Home;
