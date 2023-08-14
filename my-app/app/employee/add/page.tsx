"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const AddEmployee = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [branchs, setBranchs] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [statusEmployee, setStatusEmployee] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/department");
        if (!response.ok) {
          throw new Error("Failed to fetch departments");
        }
        const data = await response.json();
        setDepartments(data.departments);
      } catch (error) {
        console.log("Error loading departments", error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchBranchs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/branch");
        if (!response.ok) {
          throw new Error("Failed to fetch branchs");
        }
        const data = await response.json();
        setBranchs(data.branchs);
      } catch (error) {
        console.log("Error loading branchs", error);
      }
    };

    fetchBranchs();
  }, []);

  useEffect(() => {
    const fetchBranchs = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/statusemployee"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch statusEmployee");
        }
        const data = await response.json();
        setStatusEmployee(data.statusEmployee);
      } catch (error) {
        console.log("Error loading statusEmployee", error);
      }
    };

    fetchBranchs();
  }, []);

  console.log(statusEmployee);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-500">AddEmployee</h1>
      </div>
      <div>
        <form>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="employeeID"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Employee ID :
              </label>
              <input
                type="text"
                name="employeeID"
                id="employeeID"
                placeholder="EmployeeID"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="employeeID"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name :
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="department"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Department :
              </label>
              <div className="mt-2">
                <select
                  id="department"
                  name="department"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedBranch}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="">Select a Department</option>
                  {departments.map((department) => (
                    <option key={department._id} value={department._id}>
                      <div className="my-2">{department.name}</div>
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="brand"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Branch :
              </label>
              <div className="mt-2">
                <select
                  id="branch"
                  name="branch"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                >
                  <option value="">Select a Branch</option>
                  {branchs &&
                    branchs.map((branch) => (
                      <option key={branch._id} value={branch._id}>
                        <div className="my-2">{branch.name}</div>
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="brand"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status Employee :
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">Select a Status Employee</option>
                  {statusEmployee &&
                    statusEmployee.map((items) => (
                      <option value={items._id} key={items._id}>
                        {statusEmployee.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link href="/employee">
              <span className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </span>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
