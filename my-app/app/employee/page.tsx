import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import AddEmployee from "./addEmployee";
import UpdateEmployee from "./updateEmployee";
import DeleteEmployee from "./deleteEmployee";
import { BsSearch } from "react-icons/bs";

const prisma = new PrismaClient();

const getEmployees = async () => {
  const res = await prisma.employee.findMany({
    select: {
      id: true,
      employeeID: true,
      fullname: true,
      email: true,
      department: true,
      departmentId: true,
      branch: true,
      branchId: true,
      status: true,
      statusId: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      employeeID: "asc",
    },
  });
  return res;
};

const getDepartments = async () => {
  const res = await prisma.department.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return res;
};

const getBranchs = async () => {
  const res = await prisma.branch.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return res;
};

const getStatus = async () => {
  const res = await prisma.status.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return res;
};

const Employee = async () => {
  const [employees, departments, branchs, status] = await Promise.all([
    getEmployees(),
    getDepartments(),
    getBranchs(),
    getStatus(),
  ]);

  const employeeCount = employees.length;

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="sm:text-2xl font-medium text-indigo-600 text-xl">
          Employee Management
        </p>
        <div className="my-3">
          <AddEmployee
            departments={departments}
            branchs={branchs}
            status={status}
          />
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="text-sm md:text-sm lg:text-base text-indigo-600 font-medium">
          Showing {employeeCount} results.
        </div>
        <div className="text-xs md:text-sm lg:text-base text-indigo-600"></div>
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
        <table className="table-auto w-full border-collapse bg-white text-[10px] md:text-xs text-gray-500">
          <thead className="bg-indigo-50">
            <tr className="">
              <th className="px-6 py-2 text-gray-900">#</th>
              <th className="px-6 py-4 text-gray-900">Employee ID</th>
              <th className="px-6 py-4 text-gray-900">Full Name</th>

              <th className="px-6 py-4 text-gray-900">Department</th>
              <th className="px-6 py-4 text-gray-900">Branch</th>
              <th className="px-6 py-4 text-gray-900">Status</th>
              <th className="px-6 py-4 text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {employees.map((employee, index) => (
              <tr key={employee.id} className="hover:bg-indigo-100">
                <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                <td className="px-6 py-2.5 text-gray-700">
                  {employee.employeeID}
                </td>
                <td className="px-6 py-2.5 text-gray-700">
                  {employee.fullname}
                </td>

                <td className="px-6 py-2.5 text-gray-700">
                  {employee.department?.name}
                </td>
                <td className="px-6 py-2.5 text-gray-700">
                  {employee.branch?.name}
                </td>
                <td className="px-6 py-2.5 font-medium text-green-600">
                  {employee.status?.name}
                </td>
                <td className="px-6 py-2.5 text-gray-700 flex">
                  <UpdateEmployee
                    employee={employee}
                    departments={departments}
                    branchs={branchs}
                    status={status}
                  />
                  <DeleteEmployee employee={employee} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6 mt-5 w-full"></div>
    </div>
  );
};

export default Employee;
