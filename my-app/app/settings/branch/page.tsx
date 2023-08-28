"use client";
import Link from "next/link";

import React from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { FcEditImage, FcSearch } from "react-icons/fc";
import DeleteBranch from "@/components/branch/DeleteBranch";

const getBranchs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/branch", {
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
  const { branchs } = await getBranchs();
  const indexColumnTemplate = (rowData, column) => {
    return column.rowIndex + 1;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <div className="flex gap-4">
          <Link href={`/settings/branch/update/${rowData._id}`}>
            <FcEditImage className="text-3xl" />
          </Link>

          <DeleteBranch id={rowData._id} />
        </div>
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 items-center justify-end">
      <span className="flex items-center">
        <FcSearch />
        <input
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search......"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></input>
      </span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="bg-red-50 p-3 flex items-center justify-between rounded-lg">
        <h1 className="text-xl text-purple-600 font-bold">Manage Branch.</h1>
        <Link href={"/settings/branch/add"}>
          <button className="bg-purple-400 rounded-lg border hover:border-purple-400 hover:bg-white ">
            <span className="flex items-center px-5 py-2 gap-2 text-white hover:text-purple-700">
              {" "}
              Add Branch
              <BsDatabaseAdd />
            </span>
          </button>
        </Link>
      </div>

      <hr className="my-6" />
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-2 mx-5 ">
        <table className="table-fixed w-full border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50">
            <tr className="px-3">
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
            {branchs &&
              branchs.map((item, index) => (
                <tr key={item._id} className="hover:bg-indigo-50">
                  <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.name}</td>

                  <td>
                    <div className="flex gap-2">
                      <Link href={`/employee/update/${item._id}`}>
                        <button className="rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                          Edit
                        </button>
                      </Link>
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
