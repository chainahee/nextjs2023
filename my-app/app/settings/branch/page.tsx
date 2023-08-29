"use client";
import Link from "next/link";

import React from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { FcEditImage } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
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
  const branchsCount = branchs.length;

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

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="text-3xl font-bold text-indigo-600">Branch Management</p>
        <div className="my-3">
          <Link href={"/settings/branch/add"}>
            <button className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#1AE18B] to-[#00D392] hover:from-[#25C37F] hover:to-[#00894E]">
              <span className="flex items-center gap-2 text-white">
                {" "}
                Add Branch
                <BsDatabaseAdd className="text-lg" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="text-gray-800 font-medium">Showing {branchsCount} results.</div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-2 mx-5 ">
        <table className="table-fixed w-[700px] border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50">
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
            {branchs &&
              branchs.map((item, index) => (
                <tr key={item._id} className="hover:bg-indigo-50">
                  <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.name}</td>

                  <td>
                    <div className="flex gap-2">
                      <Link href={`/settings/branch/update/${item._id}`}>
                        <button className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#FFD048] to-[#FF9848] hover:from-[#E3B93D] hover:to-[#EC6F0E]">
                          <span className="text-white font-medium flex items-center gap-2">Edit <FiEdit className="text-lg" /> </span>
                        </button>
                      </Link>
                      <div className="">
                          <DeleteBranch id={item._id} />
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
