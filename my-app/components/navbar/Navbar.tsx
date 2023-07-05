"use client";
import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { RxDashboard, RxLaptop, RxAvatar, RxBackpack, RxGear, RxComponent1, RxMix, RxChevronDown, RxSymbol, RxArchive } from "react-icons/rx";
import Link from "next/link";

function Navbar() {

  const navigation = [
    { id: 1, name: "Dashboard", rout: "/", icon: <RxDashboard /> },
    { id: 2, name: "Borrow - Retrun", rout: "/borrow", icon: <RxSymbol /> },
    { id: 10, name: "Device", rout: "/device", icon: <RxLaptop /> },
    { id: 3, name: "Employee", rout: "/employee", icon: <RxAvatar /> },
    { id: 4, name: "About", rout: "/about", icon: <RxBackpack /> },
    {
      id: 5, name: "Settings", rout: "/settings", icon: <RxGear />, submenu: true,
      submenuItems: [
        { id: 6, name: "Brand", rout: "/settings/brand", icon: <RxComponent1 /> },
        { id: 7, name: "Category", rout: "/settings/category", icon: <RxMix /> },
        { id: 8, name: "Branch", rout: "/settings/branch", icon: <RxBackpack /> },
        { id: 9, name: "Department", rout: "/settings/department", icon: <RxComponent1 /> },
      ]
    },
    { id: 11, name: "Report", rout: "/report", icon: <RxArchive /> },
  ];

  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);


  return (
    <div
      className={`bg-purple-900 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"
        } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`text-3xl bg-white text-gray-900 rounded-full absolute -right-3 top-9 border-purple-800 border cursor-pointer ${!open && "rotate-180"
          }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex items-center">
        <CiServer
          className={`bg-amber-300 text-purple-900 text-4xl rounded cursor-pointer font-medium block float-left mr-2 duration-500 ${open && "rotate-[360deg]"
            }`}
        />
        <Link href="/"
          className={`text-white origin-left ${!open && "duration-300 scale-0"
            } whitespace-nowrap`}
        >
          Borrow & Return Systems
        </Link>
      </div>


      <div className={`flex items-center rounded-md bg-purple-100 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
        <BsSearch className={`text-purple-800 text-lg float-left cursor-pointer block ${open && "mr-2"}`} />
        <input type={"search"} placeholder="Search" className={`text-base w-full text-purple-800 bg-transparent focus:outline-none ${!open && "hidden"}`} />
      </div>


      {/* menu */}
      <ul className="pt-4">
        {navigation.map((item, index) => (
          <>
            <li key={item.id}>
              <Link href={item.rout} className="text-white text-lg flex items-center gap-x-4 cursor-pointer hover:bg-purple-800 p-2 rounded-md mt-2">
                <span className="text-2xl block float-left">{item.icon}</span>
                <span className={`text-base flex-1 ${!open && "hidden"}`}>{item.name}
                </span>
                {item.submenu && (
                  <RxChevronDown className="" onClick={() => { setSubmenuOpen(!submenuOpen) }} />
                )}

              </Link>
            </li>


            {item.submenu && submenuOpen && (
              <ul>
                {item.submenuItems.map((submenu, index) => (
                  <Link href={item.rout} key={index} className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-purple-800 px-5 p-2 rounded-md mt-2">
                    <span className="text-lg">{submenu.icon}</span>
                    {submenu.name}
                  </Link>
                ))}
              </ul>
            )}
          </>

        ))}
      </ul>
    </div>
  );
}

export default Navbar;
