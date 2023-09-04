"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DeleteEmployee from "@/components/employee/DeleteEmployee";
import { BsPencilSquare, BsSearch } from "react-icons/bs";

function InformationEmployee() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/employee");
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();

        // แปลง employeeid เป็น string ก่อนเรียงลำดับ
        const sortedEmployees = data.employees
          .map((employee) => ({
            ...employee,
            employeeid: employee.employeeid.toString(),
          }))
          .sort((a, b) => a.employeeid.localeCompare(b.employeeid));

        setEmployees(sortedEmployees);
      } catch (error) {
        console.log("Error loading employees", error);
      }
    };

    fetchEmployee();
  }, []);

  const handleSearch = () => {
    const filteredEmployees = employees.filter((employee) =>
      Object.values(employee).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(filteredEmployees);
  };

  console.log(searchTerm);

  return (
    <div className="">
      <form
        onClick={(e) => {
          e.preventDefault();
          if (searchTerm !== "") {
            handleSearch();
          }
        }}
      >
        <div className="flex justify-center items-center mt-2 gap-2">
          <div className="flex items-center border rounded-md p-2">
            <div className="flex items-center justify-center h-full border-r pr-2">
              <span className="text-gray-500">
                <BsSearch />
              </span>
            </div>
            <input
              type="text"
              placeholder="Search ...."
              className="w-full px-2 py-1 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            disabled={searchTerm === ""}
            className={`rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm ${
              searchTerm === "" ? "cursor-not-allowed" : "hover:bg-indigo-500"
            }`}
          >
            Search
          </button>
        </div>
      </form>
      <div className="w-full rounded-lg border border-gray-200 shadow-md mt-4">
        <table className="w-full border-collapse bg-white text-left text-sm md:text-sm text-gray-500">
          <thead className="bg-indigo-50">
            <tr className="">
              <th
                scope="col-3"
                className="px-6 py-2 text-gray-900 lg:text-base sm:text-sm"
              >
                No
              </th>
              <th
                scope="col-2"
                className="px-6 py-4 text-gray-900 lg:text-base sm:text-sm"
              >
                Employee ID
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-gray-900 lg:text-base sm:text-sm"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-gray-900 lg:text-base sm:text-sm"
              >
                Department
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-gray-900 lg:text-base sm:text-sm"
              >
                Branch
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-gray-900 lg:text-base sm:text-sm"
              >
                Status
              </th>
             
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-x-auto">
            {searchResults.map((employee, index) => (
              <tr key={employee._id} className="hover:bg-indigo-100">
                <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                <td className="px-6 py-2.5 text-gray-700">
                  {employee.employeeid}
                </td>
                <td className="px-6 py-2.5 text-gray-700">
                  {employee.fullname}
                </td>
                <td className="px-6 py-2.5 text-gray-700">
                  {employee.department}
                </td>
                <td className="px-6 py-2.5 text-gray-700">{employee.branch}</td>
                <td className="px-6 py-2.5">
                  <span
                    className={` ${
                      employee.status === "Active"
                        ? "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                        : employee.status === "Leave"
                        ? "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10 gap-2"
                        : "text-gray-700"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InformationEmployee;
