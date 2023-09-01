"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DeleteEmployee from "@/components/employee/DeleteEmployee";
import { BsPencilSquare, BsSearch } from "react-icons/bs";

// icon
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Employee() {
  const [employees, setEmployee] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const reacordsPaerPage = 20;
  const lastIndex = currentPage * reacordsPaerPage;
  const firstIndex = lastIndex - reacordsPaerPage;
  const records = employees.slice(firstIndex, lastIndex);
  const npage = Math.ceil(employees.length / reacordsPaerPage);
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * reacordsPaerPage;
  const employeeCount = employees.length;
  const gotoPage = (page) => {
    if (page >= 1 && page <= npage) {
      setCurrentPage(page);
    }
  };

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

        setEmployee(sortedEmployees);
      } catch (error) {
        console.log("Error loading employees", error);
      }
    };

    fetchEmployee();
  }, []);

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="sm:text-2xl font-medium text-indigo-600 text-xl">
          Employee Management
        </p>
        <div className="my-3">
          <Link
            href={"/employee/add"}
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-4 sm:py-2 md:text-base md:px-4 md:py-2 lg:text-lg lg:px-4.5 lg:py-2.5"
          >
            Add Employee
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="text-xs md:text-sm lg:text-base text-indigo-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + reacordsPaerPage, employeeCount)} of{" "}
          {employeeCount} results
        </div>
        <Link
          href={"employee/search"}
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-4 sm:py-2 md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 flex gap-2 items-center"
        >
          Search{" "}
          <span>
            <BsSearch />
          </span>
        </Link>
      </div>

      <div className="overflow-scroll h-[350px] w-full rounded-lg border border-gray-200 shadow-md mt-2">
        <table className="w-full border-collapse bg-white text-left text-xs md:text-sm text-gray-500 ">
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
              <th
                scope="col"
                className="px-6 py-4 text-gray-900 lg:text-base sm:text-sm"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-x-auto">
            {records &&
              records
                .sort((a, b) => a.employeeid.localeCompare(b.employeeid))
                .map((item, index) => (
                  <tr key={item._id} className="hover:bg-indigo-100">
                    <td className="px-6 py-2.5 text-gray-700">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-2.5 text-gray-700">
                      {item.employeeid}
                    </td>
                    <td className="px-6 py-2.5 text-gray-700">
                      {item.fullname}
                    </td>
                    <td className="px-6 py-2.5 text-gray-700">
                      {item.department}
                    </td>
                    <td className="px-6 py-2.5 text-gray-700">{item.branch}</td>
                    <td className="px-6 py-2.5">
                      <span
                        className={` ${
                          item.status === "Active"
                            ? "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                            : item.status === "Leave"
                            ? "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10 gap-2"
                            : "text-gray-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex justify-center gap-2">
                        <Link href={`/employee/update/${item._id}`}>
                          <button className="gap-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            Update <BsPencilSquare className="text-lg" />
                          </button>
                        </Link>
                        <div className="">
                          <DeleteEmployee id={item._id} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6 mt-5 w-full">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => {
              if (currentPage !== firstIndex) {
                prePage();
              }
            }}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-purple-700 hover:bg-gray-50"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (currentPage !== lastIndex && currentPage !== npage) {
                nextPage();
              }
            }}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
              currentPage === lastIndex || currentPage === npage
                ? "text-gray-300 cursor-not-allowed"
                : "text-pink-700 hover:bg-gray-50"
            }`}
            disabled={currentPage === lastIndex || currentPage === npage}
          >
            Next
          </button>
        </div>

        <div className="hidden sm:flex sm:flex-1 justify-center">
          <nav>
            <ul className="flex items-center gap-x-5">
              {currentPage !== 1 && (
                <li>
                  <span onClick={() => gotoPage(1)}>
                    <span className="text-indigo-700 font-medium flex cursor-pointer hover:bg-indigo-200 rounded-full">
                      <MdKeyboardDoubleArrowLeft className="text-2xl m-1 rounded-full" />{" "}
                    </span>
                  </span>
                </li>
              )}
              {currentPage > 1 && (
                <li className="">
                  <span onClick={prePage}>
                    <span className="text-indigo-700 font-medium flex cursor-pointer hover:bg-indigo-200 rounded-full">
                      <MdOutlineKeyboardArrowLeft className="text-2xl m-1 rounded-full" />
                    </span>
                  </span>
                </li>
              )}
              {numbers.map((n, i) => (
                <li
                  className={`${
                    currentPage === n
                      ? "text-white bg-indigo-600 rounded-full cursor-pointer p-1"
                      : "text-indigo-600 hover:bg-indigo-200 rounded-full p-1"
                  }`}
                  key={i}
                >
                  <span onClick={() => gotoPage(n)}>
                    <span className="p-2 cursor-pointer">{n}</span>
                  </span>
                </li>
              ))}

              {currentPage < npage && (
                <li>
                  <span onClick={nextPage}>
                    <span className="text-indigo-700 font-medium flex cursor-pointer hover:bg-indigo-200 rounded-full">
                      <MdOutlineKeyboardArrowRight className="text-2xl m-1 rounded-full" />{" "}
                    </span>
                  </span>
                </li>
              )}

              {currentPage !== npage && (
                <li>
                  <span onClick={() => gotoPage(npage)}>
                    <span className="text-indigo-700 font-medium flex cursor-pointer hover:bg-indigo-200 rounded-full">
                      <MdKeyboardDoubleArrowRight className="text-2xl rounded-full m-1" />{" "}
                    </span>
                  </span>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Employee;
