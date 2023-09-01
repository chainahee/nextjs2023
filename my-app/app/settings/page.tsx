import Link from "next/link";
import React from "react";
import { TbBrandFinder } from "react-icons/tb";
import { AiOutlineTags } from "react-icons/ai";
import { BsBuildings, BsBriefcase, BsPatchExclamation } from "react-icons/bs";

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
      icon: <BsPatchExclamation />,
      label: "Status Device",
    },
    {
      href: "/settings/branch",
      icon: <BsBuildings />,
      label: "Branch",
    },
    {
      href: "/settings/department",
      icon: <BsBriefcase />,
      label: "Department",
    },
    {
      href: "/settings/statusemployee",
      icon: <BsPatchExclamation />,
      label: "Status Employee",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center mb-3">
        <p className="sm:text-2xl font-medium text-indigo-600 text-xl">
          Setting Menu
        </p>
      </div>
      <div className="gap-3 grid md:grid-cols-2 lg:grid-cols-3 items-center mt-3">
        {menuItems.map((menuItem, index) => (
          <Link
            href={menuItem.href}
            key={index}
            className="border rounded-md p-2.5 hover:bg-indigo-100 border-indigo-500"
          >
            <div className="flex justify-start p-1.5 gap-x-3">
              <span className="lg:text-3xl text-indigo-500 text-xl font-medium flex items-center">
                {menuItem.icon}
              </span>
              <span className="lg:text-xl md:text-lg text-base font-medium text-indigo-800">
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
