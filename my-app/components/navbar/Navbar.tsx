"use client";
import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { CiServer } from "react-icons/ci";

function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-purple-900 h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`text-3xl bg-white text-gray-900 rounded-full absolute -right-3 top-9 border-purple-800 border cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex items-center">
        <CiServer
          className={`bg-amber-300 text-purple-900 text-4xl rounded cursor-pointer font-medium block float-left mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <span
          className={`text-white origin-left ${
            !open && "duration-300 scale-0"
          } whitespace-nowrap`}
        >
          Borrow & Return Systems
        </span>
      </div>
      <div className="flex items-center rounded-md bg-purple-100 mt-6 px-4 py-2">
        <BsSearch className="text-purple-800 text-lg float-left cursor-pointer block mr-2" />
        <input type={"search"} placeholder="Search" className={`text-base w-full text-purple-800 bg-transparent focus:outline-none ${!open && "hidden"}`} />
      </div>
    </div>
  );
}

export default Navbar;
