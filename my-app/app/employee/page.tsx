"use client";
import React from "react";
import Link from "next/link";

const getEmployee = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/employee", {
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

async function Employee() {
  const { employees } = await getEmployee();

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="text-3xl font-bold text-indigo-600">
          Employee Management
        </p>
        <div className="my-4">
          <Link
            href={"/employee/add"}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Employee
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md mt-2 mx-5 ">
        <table className="table-auto md:table-fixed w-full border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50">
            <tr className="px-3">
              <th scope="col" className="px-6 py-2 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                No
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                Employee ID
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                Full Name
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                Department
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                Branch
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900 lg:text-lg sm:text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-x-auto">
            {employees &&
              employees.map((item, index) => (
                <tr key={item._id} className="hover:bg-indigo-50">
                  <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.employeeid}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.fullname}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.department}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.branch}</td>
                  <td className="px-6 py-2.5 text-gray-700">{item.status}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/employee/update/${item._id}`}>
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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

export default Employee;
