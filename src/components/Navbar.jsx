import React, { useState } from "react";
import { logo, Bars, win_kitchen } from "../assets";
import { FaCartPlus, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown ";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const AddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const CategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const ToggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const CloseMobileNav = () => {
    setIsMobileOpen(false);
  };

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <div className="bg-transparent lg:bg-primary  p-3 w-max rounded-md">
          <img src={logo} alt="logo" />
        </div>
        <div className="lg:flex hidden gap-40 items-center justify-evenly">
          <div className="flex gap-10">
            <Dropdown />
            <SearchBar />
          </div>
          <div className="nav_auth flex items-center gap-5 relative">
            <div>
              <h5>Hello, Sign in</h5>
              <h4 className="font-semibold">My Account</h4>
            </div>
            <div className="icon relative" onClick={AddToCart}>
              <FaCartPlus size={24} color="#CCCCCC" />
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-1 -right-1 transform translate-x-1/2 -translate-y-1/2">
                  {cartCount}
                </span>
              )}
            </div>
            <div>
              <h5>My Cart</h5>
              <h4 className="font-semibold">$836.00</h4>
            </div>
            <div className="">
              <button className="px-8 mx-10 py-1 border-stroke border-2 rounded-xl font-semibold text-lg text-white">
                Sign Up
              </button>
            </div>
            <div className="bg-primary w-1/2 h-[25rem] absolute top-0 right-0  -z-20 rounded-bl-full hidden lg:block text-white pt-28 pl-5 px-10">
              <ul className="flex flex-col justify-center items-end gap-5 text-xl font-semibold ">
                <li className="flex justify-center items-center cursor-pointer">
                  <Link to="">Food App</Link>
                  <img src={win_kitchen} alt="" />
                </li>
                <li>
                  <Link to="">Accessories</Link>
                </li>
                <li>
                  <Link to="">Latops</Link>
                </li>
                <li>
                  <Link to="">Watch</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 lg:hidden">
          <div className="flex items-center gap-5">
            <FaSearch size={24} color="#CCCCCC" />
            <div className="icon relative" onClick={AddToCart}>
              <FaCartPlus size={24} color="#CCCCCC" />
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-1 -right-1 transform translate-x-1/2 -translate-y-1/2">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
          <img src={Bars} alt="" onClick={ToggleMobile} className="pl-5" />
        </div>
      </div>

      {isMobileOpen && (
        <div className=" w-full  text-white">
          <div
            className="bg-textColor bg-opacity-50 w-full h-[100vh] absolute z-20 top-0 left-0 p-5"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <div>
              <button
                className="bg-textColor bg-opacity-20 p-1"
                onClick={CloseMobileNav}
              >
                <FaTimes />
              </button>
            </div>
            <div className="">
              <ul className="flex flex-col  items-end gap-5 text-lg font-semibold ">
                <button className="px-8  py-1 border-stroke bg-secondary-200 border-2 rounded-xl font-semibold text-lg text-white">
                  Sign Up
                </button>
                <li className="flex justify-center items-center cursor-pointer ">
                  <Link to="">Food App</Link>
                  <img src={win_kitchen} alt="" />
                </li>
                <li>
                  <Link to="">Accessories</Link>
                </li>
                <li>
                  <Link to="">Latops</Link>
                </li>
                <li>
                  <Link to="">Watch</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;