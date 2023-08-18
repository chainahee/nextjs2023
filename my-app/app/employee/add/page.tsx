"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function AddEmployee() {
  const [employeeid, setEmployeeid] = useState("");
  const [fullname, setFullName] = useState("");
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState("");
  const [branchs, setBranchs] = useState([]);
  const [branch, setBranch] = useState("");
  const [statusEmployee, setStatusEmployee] = useState([]);
  const [status, setStatus] = useState("");
  const router = useRouter();

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
    const fetchStatus = async () => {
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

    fetchStatus();
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!employeeid || !fullname || !department || !branch || !status) {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/employee", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          employeeid,
          fullname,
          department,
          branch,
          status,
        }),
      });

      console.log(res);

      if (res.ok) {
        router.push("/employee");
      } else {
        throw new Error("Failed to create a employee");
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(fullname);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-500">
          Form Add Employee
        </h1>
      </div>

      <form onSubmit={handlerSubmit}>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="employeeID"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Employee ID :
            </label>
            <input
              type="number"
              name="employeeID"
              id="employeeID"
              value={employeeid}
              onChange={(e) => setEmployeeid(e.target.value)}
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
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
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
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="0">Select a Department</option>
                {departments.map((department) => (
                  <option key={department._id} value={department.name}>
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
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="0">Select a Branch</option>
                {branchs &&
                  branchs.map((branch) => (
                    <option key={branch._id} value={branch.name}>
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
              Status :
            </label>
            <div className="mt-2">
              <select
                id="branch"
                name="branch"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="0">Select a Status</option>
                {statusEmployee &&
                  statusEmployee.map((status) => (
                    <option key={status._id} value={status.name}>
                      <div className="my-2">{status.name}</div>
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
  );
}

export default AddEmployee;
