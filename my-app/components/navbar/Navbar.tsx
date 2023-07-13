"use client";
import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import {
  RxDashboard,
  RxLaptop,
  RxAvatar,
  RxBackpack,
  RxGear,
  RxSymbol,
  RxArchive,
} from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const navigation = [
    { id: 1, name: "Dashboard", href: "/", icon: <RxDashboard /> },
    { id: 2, name: "Borrow - Retrun", href: "/borrow", icon: <RxSymbol /> },
    { id: 10, name: "Device", href: "/device", icon: <RxLaptop /> },
    { id: 3, name: "Employee", href: "/employee", icon: <RxAvatar /> },
    { id: 4, name: "About", href: "/about", icon: <RxBackpack /> },
    {
      id: 5,
      name: "Settings",
      href: "/settings",
      icon: <RxGear />,
    },
    { id: 11, name: "Report", href: "/report", icon: <RxArchive /> },
  ];

  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={`bg-indigo-900 h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`text-3xl bg-white text-gray-900 rounded-full absolute -right-3 top-9 border-indigo-800 border cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex items-center">
        <CiServer
          className={`bg-amber-300 text-indigo-900 text-4xl rounded cursor-pointer font-medium block float-left mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <Link
          href="/"
          className={`text-white origin-left ${
            !open && "duration-300 scale-0"
          } whitespace-nowrap`}
        >
          Borrow & Return Systems
        </Link>
      </div>

      <div
        className={`flex items-center rounded-md bg-indigo-100 mt-6 ${
          !open ? "px-2.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-indigo-800 text-lg float-left cursor-pointer block ${
            open && "mr-2"
          }`}
        />
        <input
          type="search"
          id="search"
          placeholder="Search"
          className={`text-base w-full text-indigo-800 bg-transparent focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      {/* menu */}
      <div className="pt-4">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={
              pathname === `${item.href}` ||
              pathname.startsWith(`${item.href}/`)
                ? "bg-indigo-700 text-white flex items-center p-2 rounded-md mt-2 gap-x-4 cursor-pointer"
                : "text-white text-lg flex items-center gap-x-4 cursor-pointer hover:bg-indigo-700 p-2 rounded-md mt-2"
            }
          >
            <span className="text-2xl block float-left">{item.icon}</span>
            <span className={`text-base flex-1 ${!open && "hidden"}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
