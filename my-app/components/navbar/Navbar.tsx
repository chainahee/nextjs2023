"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";

function Navbar() {
  const navigation = [
    { id: 1, name: "Dashboard", rout: "/" },
    { id: 2, name: "Device", rout: "/device" },
    { id: 3, name: "Employee", rout: "/employee" },
    { id: 4, name: "About", rout: "/about" },
    { id: 5, name: "Settings", rout: "/settings" },
  ];

  const [visiable, setVisiable] = useState(false);

  return (
    <div className="flex justify-between h-24 items-center">
      <Link href="/" className="md:text-lg font-bold lg:text-2xl">
        Borrow & Return System
      </Link>
      <div className="flex items-center gap-3">
        {navigation.map((item) => (
          <Link key={item.id} href={item.rout}>
            <span className="md:text-sm lg:text-xl hidden lg:block ">
              {item.name}
            </span>
          </Link>
        ))}
        <AiOutlineBars className="md:block lg:hidden text-3xl font-bold cursor-pointer text-purple-800" />
        <button
          className="p-2 bg-purple-500 text-white cursor-pointer rounded-md md:text-sm lg:text-xl"
          onClick={() => {
            console.log("Logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
