"use client";
import Link from "next/link";

import React from "react";
import { BsDatabaseAdd, BsPencilSquare } from "react-icons/bs";
import DeleteBrand from "@/components/brand/DeleteBrand";

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
  const branchsCount = brands.length;

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="text-3xl font-medium text-indigo-600">Brand Management</p>
        <div className="my-3">
          <Link href={"/settings/brand/add"}>
            <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-4 sm:py-2 md:text-base md:px-4 md:py-2 lg:text-lg lg:px-4.5 lg:py-2.5">
              <span className="flex items-center gap-2">
                Add Brand
                <BsDatabaseAdd />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="text-xs md:text-sm lg:text-base text-indigo-600">
        Showing {branchsCount} results.
      </div>
      <div className="overflow-scroll h-[300px] rounded-lg border border-gray-200 shadow-md mt-2">
        <table className="table-auto w-[700px] border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-indigo-50">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-2 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Branch Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-x-auto">
            {brands &&
              brands.map((item, index) => (
                <tr key={item._id} className="hover:bg-indigo-100">
                  <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.name}</td>

                  <td>
                    <div className="flex gap-2">
                      <Link href={`/settings/brand/update/${item._id}`}>
                        <button className="gap-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          Update <BsPencilSquare className="text-lg" />
                        </button>
                      </Link>
                      <div className="">
                        <DeleteBrand id={item._id} />
                      </div>
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
