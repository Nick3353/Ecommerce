import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { food } from "../assets/index";
import LazyLoad from "../components/LazyLoad";

function Home() {
  return (
    <React.Fragment>
      {/* navigation Bar */}
      <div className="relative">
        <Navbar />

        <div className="bg-primary w-[13rem] h-[30rem] rounded-bl-[10rem] absolute top-0 right-0 -z-20 hidden lg:block">
          <ul className="pt-28 pr-10 flex flex-col gap-10 items-end text-white">
            <li className="flex items-center gap-3">
              <Link to="" className="text-lg font-bold">
                Food App
              </Link>
              <img src={food} alt="Food Icon" className="h-8" />
            </li>
            <li>
              <Link to="" className="text-lg">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="" className="text-lg">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="" className="text-lg">
                Watche
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* navigation Bar */}
      {/* hero section  */}
      <div>
        <LazyLoad />
      </div>
      {/* hero section  */}
    </React.Fragment>
  );
}

export default Home;
