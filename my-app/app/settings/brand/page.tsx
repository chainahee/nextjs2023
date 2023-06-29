"use client";
import From from "@/components/from/from";
import Link from "next/link";

import React, { useState } from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { FcEditImage, FcDeleteDatabase } from "react-icons/fc";

const getBrands = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/brand", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch brands");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading brand", error);
  }
};

async function Brand() {
  const { brands } = await getBrands();

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="bg-red-100 p-3 flex items-center justify-between rounded-lg">
        <h1 className="text-xl text-purple-600 font-bold">Manage Brand.</h1>
        <Link href={"/settings/brand/add"}>
          <button className="bg-purple-400 rounded-lg border hover:border-purple-400 hover:bg-white ">
            <span className="flex items-center px-5 py-2 gap-2 text-white hover:text-purple-700">
              {" "}
              Add Brand
              <BsDatabaseAdd />
            </span>
          </button>
        </Link>
      </div>

      <hr className="my-6" />
      <div className="flex items-center justify-center">
        <table className="w-4/6 mb-5">
          <thead className="bg-gray-800 text-white">
            <tr className="">
              <th className="p-3">No.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-800">
            {brands.map((items, index) => (
              <tr key={items._id}>
                <td className="p-3 flex items-center justify-center">
                  {index + 1}
                </td>
                <td className="p-3">{items.name}</td>
                <td className="p-3">
                  <div className="flex gap-x-4 items-center justify-center text-3xl">
                    <Link href={`/settings/brand/update/${items._id}`}>
                      <FcEditImage />
                    </Link>
                    <button>
                      <FcDeleteDatabase />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brand;
