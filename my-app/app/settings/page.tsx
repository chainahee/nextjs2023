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
        <h1 className="text-3xl mb-16 text-pink-600 font-bold">Setting Menu</h1>
      </div>
      <div className="gap-7 grid md:grid-cols-2 lg:grid-cols-4 items-center">
        {menuItems.map((menuItem, index) => (
          <Link
            href={menuItem.href}
            key={index}
            className="border-2 rounded-md relative p-3 text-center flex items-center justify-center"
          >
            <div className="lg:flex lg:gap-3 grid justify-center items-center">
              <span className="text-8xl text-purple-400">{menuItem.icon}</span>
              <span className="lg:text-2xl md:text-xl text-lg font-bold text-purple-600 pt-4">
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
