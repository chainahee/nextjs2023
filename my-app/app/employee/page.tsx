"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DeleteEmployee from "@/components/employee/DeleteEmployee";

function Employee() {
  const [search, setSearch] = useState("");
  const [employees, setEmployee] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const reacordsPaerPage = 7;
  const lastIndex = currentPage * reacordsPaerPage;
  const firstIndex = lastIndex - reacordsPaerPage;
  const records = employees.slice(firstIndex, lastIndex);
  const npage = Math.ceil(employees.length / reacordsPaerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/employee");
        if (!response.ok) {
          throw new Error("Failed to fetch departments");
        }
        const data = await response.json();
        setEmployee(data.employees);
      } catch (error) {
        console.log("Error loading employees", error);
      }
    };

    fetchEmployee();
  }, []);

  console.log(search);

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
      </form>

      <div className="overflow-x-auto overflow-hidden rounded-lg border border-gray-200 shadow-md mt-2 mx-5 ">
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
                Employee ID
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-6 py-4  font-semibold text-gray-900 lg:text-base sm:text-sm"
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
                .map((item, index) => (
                  <tr key={item._id} className="hover:bg-indigo-50">
                    <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
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
                          ? "text-green-500"
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
      <nav className="flex mt-7 border border-indigo-800 p-2.5 rounded-full">
        <ul className="flex items-center gap-x-5">
          <li className="">
            <a href="#" onClick={prePage}>
              <span className="text-indigo-700 font-medium">Pre Page</span>
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`${currentPage === n ? "text-indigo-500" : ""}`}
              key={i}
            >
              <a href="#" className="" onClick={changeCPage}>
                {n}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={nextPage}>
              <span className="text-indigo-700 font-medium">Next Pages </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(_id) {
    setCurrentPage(_id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Employee;
