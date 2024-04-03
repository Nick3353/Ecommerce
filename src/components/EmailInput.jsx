import React from "react";
import { FaSearch } from "react-icons/fa";
const EmailInput = () => {
  return (
    <div className="bg-[#FEFEFE] bg-opacity-20 p-2 rounded-3xl">
      <div className="flex items-center  h-[70px] border-2  rounded-2xl overflow-hidden  lg:w-[409px]">
        <input
          type="email"
          placeholder="YOUR EMAIL"
          className="w-full px-4  bg-transparent outline-none bg-white h-16 text-textColor "
        />
        <button
          type="submit"
          className="w-[146px] h-[70px]  bg-linear   font-semibold"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default EmailInput;