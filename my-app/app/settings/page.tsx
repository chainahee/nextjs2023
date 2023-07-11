import Link from "next/link";
import React from "react";
import { TbBrandFinder } from "react-icons/tb";
import { AiOutlineTags } from "react-icons/ai";
import { BsBuildings, BsBriefcase } from "react-icons/bs";

function Settings() {
  const menuItems = [
    {
      href: "/settings/brand",
      icon: <TbBrandFinder />,
      label: "Brand",
    },
    {
      href: "/settings/category",
      icon: <AiOutlineTags />,
      label: "Category",
    },
    {
      href: "/settings/statusdevice",
      icon: <AiOutlineTags />,
      label: "Status Device",
    },
    {
      href: "/settings/department",
      icon: <BsBriefcase />,
      label: "Department",
    },
    {
      href: "/settings/branch",
      icon: <BsBuildings />,
      label: "Branch",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="md:text-2xl text-xl lg:text-3xl mb-16 text-purple-600 font-bold">Setting Menu</h1>
      </div>
      <div className="gap-7 grid md:grid-cols-2 lg:grid-cols-4 items-center">
        {menuItems.map((menuItem, index) => (
          <Link
            href={menuItem.href}
            key={index}
            className="border-2 rounded-md p-3"
          >
            <div className="lg:flex lg:gap-3 grid lg:items-center justify-center">
              <span className="lg:text-6xl text-purple-500 text-4xl items-center flex justify-center lg:py-4">
                {menuItem.icon}
              </span>
              <span className="lg:text-2xl md:text-xl text-base font-bold text-purple-800 pt-4">
                {menuItem.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Settings;
