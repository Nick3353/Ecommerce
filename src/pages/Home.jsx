import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
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
} from "../assets/index";
import LazyLoad from "../components/LazyLoad";

function Home() {
  const Trending = [
    {
      imageUrl: casio_watch,
      name: "Product 1",
      price: "$10",
    },
    {
      imageUrl: iphone12,
      name: "Product 2",
      price: "$20",
    },
    {
      imageUrl: brown_jacket,
      name: "Product 3",
      price: "$15",
    },
    {
      imageUrl: hd_monitor,
      name: "Product 4",
      price: "$25",
    },
    // Add more slide objects as needed
  ];
  const categoriesData = [
    {
      name: "Sneakers",
      image: sneaker,
    },
    {
      name: "Mens clothes",
      image: men_clothes,
    },
    {
      name: "Ladies Dress",
      image: ladies_dress,
    },
    {
      name: "Casio watch",
      image: sneaker, // Assuming the image should be different
    },
    {
      name: "Win Kitchen",
      image: win_kitchen,
    },
    {
      name: "Stores",
      image: stores,
    },
  ];

  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div>
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
        <ReusableCarousel title="Trending" itemsToShow={4} slides={Trending} />
      </div>
    </React.Fragment>
  );
}

export default Home;