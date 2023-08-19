"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DeleteEmployee from "@/components/employee/DeleteEmployee";

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
  const reacordsPaerPage = 10;
  const lastIndex = currentPage * reacordsPaerPage;
  const firstIndex = lastIndex - reacordsPaerPage;
  const records = employees.slice(firstIndex, lastIndex);
  const npage = Math.ceil(employees.length / reacordsPaerPage);
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * reacordsPaerPage;
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
        const sortedEmployees = data.employees.map(employee => ({
          ...employee,
          employeeid: employee.employeeid.toString(),
        })).sort((a, b) => a.employeeid.localeCompare(b.employeeid));
  
        setEmployee(sortedEmployees);
      } catch (error) {
        console.log("Error loading employees", error);
      }
    };
  
    fetchEmployee();
  }, []);
  

  const employeeCount = employees.length;

  console.log(employees);

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="text-3xl font-bold text-indigo-600">
          Employee Management
        </p>
        <div className="my-3">
          <Link
            href={"/employee/add"}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        <div className="text-gray-800">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + reacordsPaerPage, employeeCount)} of{" "}
          {employeeCount} results
        </div>
      </form>

      <div className=" overflow-scroll h-[400px] rounded-lg border border-gray-200 shadow-md mt-2 mx-5 ">
        <table className="table-fixed w-full border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-gray-50">
            <tr className="px-3">
              <th
                scope="col"
                className="px-6 py-2 w-20 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Employee ID
              </th>
              <th
                scope="col"
                className="px-6 py-4 w-60 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 w-60 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Department
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Branch
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Status
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
                    <td
                      className={`px-6 py-2.5 font-medium ${
                        item.status === "Active"
                          ? "text-lime-500"
                          : item.status === "Leave"
                          ? "text-red-500"
                          : "text-gray-700"
                      }`}
                    >
                      {item.status}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Link href={`/employee/update/${item._id}`}>
                          <button className="rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                            Edit
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
      <div className="px-4 py-5 sm:px-6">
        <nav className="flex border border-indigo-800 p-2.5 rounded-full">
          <ul className="flex items-center gap-x-5">
            {currentPage !== 1 && (
              <li>
                <Link href="#" onClick={() => gotoPage(1)}>
                  <span className="text-indigo-700 font-medium">
                    <MdKeyboardDoubleArrowLeft className="text-2xl" />{" "}
                  </span>
                </Link>
              </li>
            )}
            {currentPage > 1 && (
              <li className="">
                <Link href="#" onClick={prePage}>
                  <span className="text-indigo-700 font-medium">
                    <MdOutlineKeyboardArrowLeft className="text-2xl" />
                  </span>
                </Link>
              </li>
            )}
            {numbers.map((n, i) => (
              <li
                className={`${
                  currentPage === n
                    ? "text-indigo-500 bg-indigo-50 rounded-full"
                    : ""
                }`}
                key={i}
              >
                <Link href="#" onClick={() => gotoPage(n)}>
                  <span className="px-1.5 border rounded-full border-indigo-500 text-indigo-700 font-medium hover:bg-indigo-300">
                    {n}
                  </span>
                </Link>
              </li>
            ))}

            {currentPage < npage && (
              <li>
                <Link href="#" onClick={nextPage}>
                  <span className="text-indigo-700 font-medium">
                    <MdOutlineKeyboardArrowRight className="text-2xl" />{" "}
                  </span>
                </Link>
              </li>
            )}

            {currentPage !== npage && (
              <li>
                <Link href="#" onClick={() => gotoPage(npage)}>
                  <span className="text-indigo-700 font-medium">
                    <MdKeyboardDoubleArrowRight className="text-2xl" />{" "}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
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
