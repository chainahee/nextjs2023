import React from "react";
import { PrismaClient } from "@prisma/client";
import AddEmployee from "../about/add";
import DeleteEmployee from "./delete";
import UpdateEmployee from "./update";

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
    },
    orderBy: {
      fullname: "asc",
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

const About = async () => {
  const [employees, departments, branchs, status] = await Promise.all([
    getEmployees(),
    getDepartments(),
    getBranchs(),
    getStatus(),
  ]);
  return (
    <div className="p-4">
      <div className="mb-2">
        <AddEmployee
          departments={departments}
          branchs={branchs}
          status={status}
        />
      </div>
      <div className="w-full rounded-lg border border-gray-200 shadow-md mt-2">
        <table className="table-auto w-full border-collapse bg-white text-xs md:text-sm text-gray-500">
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
            {employees &&
              employees.map((employee, index) => (
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
                  <td className="px-6 py-2.5 text-gray-700">
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
    </div>
  );
};

export default About;
