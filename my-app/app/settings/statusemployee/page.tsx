"use client";
import DeleteStatusEmployee from "@/components/statusemployee/DeleteStatusEmployee";
import Link from "next/link";
import React from "react";
import { BsDatabaseAdd, BsPencilSquare } from "react-icons/bs";

const getStatus = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/statusemployee", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch statusemployee");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading statusemployee", error);
  }
};

async function StatusEmployee() {
  const { statusEmployee } = await getStatus();
  const statusEmployeeCount = statusEmployee.length;

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-medium text-indigo-600">
          Status Employee Management
        </h1>
        <Link href={"/settings/statusemployee/add"}>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5">
            <span className="flex items-center gap-2">
              Add Status Employee
              <BsDatabaseAdd />
            </span>
          </button>
        </Link>
      </div>
      <div className="text-xs md:text-sm lg:text-base text-indigo-600">
        Showing {statusEmployeeCount} results.
      </div>
      <div className="w-full rounded-lg border border-gray-200 shadow-md mt-2">
        <table className="w-full md:table-fixed border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr className="px-3">
              <th scope="col" className="px-6 py-2 font-medium text-gray-900">
                No
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {statusEmployee &&
              statusEmployee.map((items, index) => (
                <tr key={items._id} className="hover:bg-gray-50">
                  <td className="px-6 py-2">{index + 1}</td>
                  <td className="px-6 py-2">{items.name}</td>
                  <td className="px-6 py-2">
                    <div className="flex gap-2">
                      <Link
                        href={`/settings/statusemployee/update/${items._id}`}
                      >
                        <button className="gap-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          Update <BsPencilSquare className="text-lg" />
                        </button>
                      </Link>
                      <div className="">
                        <DeleteStatusEmployee id={items._id} />
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

export default StatusEmployee;
