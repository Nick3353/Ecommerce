
import React from "react";
import { FaSearch } from "react-icons/fa";
const EmailInput = () => {
  return (
    <div className="flex items-center  border-2 border-less rounded-2xl overflow-hidden  lg:w-full">
      <input
        type="email"
        placeholder="YOUR EMAIL"
        className="w-full px-4  bg-transparent outline-none bg-white h-16 text-textColor "
      />
      <div>

      <button type="submit" className="  bg-linear r rounded-xl  font-semibold">
      GET STARTED
      </div>
      </button>
    </div>
  );
};

export default EmailInput;
