"use client";
import From from "@/components/from/from";
import React, { useEffect, useState } from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { FcEditImage, FcDeleteDatabase } from "react-icons/fc";

interface Brand {
  _id: string;
  name: string;
  __v: number;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/brand");
  const data = await res.json();
  return data;
}

function Brand() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setBrands(data.brands);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="">
        <button className="bg-purple-400 rounded-lg border hover:border-purple-400 hover:bg-white ">
          <span className="flex items-center px-5 py-2 gap-2 text-white hover:text-purple-700">
            {" "}
            Add Brand
            <BsDatabaseAdd />
          </span>
        </button>
      </div>
      <div className="">
        <From />
      </div>
      <hr className="mb-6" />
      <div className="flex justify-center mb-3">
        <h1 className="text-2xl font-bold text-purple-800">Data Table Brand</h1>
      </div>
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
                    <button>
                      <FcEditImage />
                    </button>
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
