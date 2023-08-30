"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DeleteEmployee from "@/components/employee/DeleteEmployee";
import { BsPencilSquare } from "react-icons/bs";

// icon
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Employee() {
  const [search, setSearch] = useState("");
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
        <p className="sm:text-3xl font-bold text-indigo-600 text-xl">
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
      <form>
        <div className="flex items-center justify-center my-2">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search anythings"
            className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="text-sm text-indigo-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + reacordsPaerPage, employeeCount)} of{" "}
          {employeeCount} results
        </div>
      </form>

      <div className="overflow-scroll h-[350px] w-full rounded-lg border border-gray-200 shadow-md mt-2 mx-5 ">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50">
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
                .filter((item) => {
                  return (
                    search.toLowerCase() === "" ||
                    Object.values(item).some((val) =>
                      val.toString().toLowerCase().includes(search)
                    )
                  );
                })
                .sort((a, b) => a.employeeid.localeCompare(b.employeeid))
                .map((item, index) => (
                  <tr key={item._id} className="hover:bg-indigo-50">
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
                            Edit <BsPencilSquare className="text-lg" />
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
                      <MdKeyboardDoubleArrowLeft className="text-2xl border border-indigo-500 rounded-full" />{" "}
                    </span>
                  </span>
                </li>
              )}
              {currentPage > 1 && (
                <li className="">
                  <span onClick={prePage}>
                    <span className="text-indigo-700 font-medium flex cursor-pointer hover:bg-indigo-200 rounded-full">
                      <MdOutlineKeyboardArrowLeft className="text-2xl border border-indigo-500 rounded-full" />
                    </span>
                  </span>
                </li>
              )}
              {numbers.map((n, i) => (
                <li
                  className={`${
                    currentPage === n
                      ? "text-white bg-indigo-600 rounded-full cursor-pointer"
                      : "text-indigo-600 hover:bg-indigo-200 rounded-full"
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
                      <MdOutlineKeyboardArrowRight className="text-2xl border border-indigo-500 rounded-full" />{" "}
                    </span>
                  </span>
                </li>
              )}

              {currentPage !== npage && (
                <li>
                  <span onClick={() => gotoPage(npage)}>
                    <span className="text-indigo-700 font-medium flex cursor-pointer hover:bg-indigo-200 rounded-full">
                      <MdKeyboardDoubleArrowRight className="text-2xl border border-indigo-500 rounded-full" />{" "}
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
