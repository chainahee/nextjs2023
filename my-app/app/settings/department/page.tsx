import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import AddDepartment from "./addDepartment";
import DeleteDepartment from "./deleteDepartment";
import UpdateDepartment from "./updateDepartment";

const getDepartments = async () => {
  const data = await prisma.department.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return data;
};

const Department = async () => {
  const [departments] = await Promise.all([getDepartments()]);
  const departmentCount = departments.length;

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="text-3xl font-medium text-indigo-600">
          Branch Management
        </p>
        <div className="my-3">
          <AddDepartment />
        </div>
      </div>
      <div className="text-sm md:text-sm lg:text-base text-indigo-600 font-medium">
        Showing {departmentCount} results.
      </div>
      <div className="overflow-scroll w-full rounded-lg border border-gray-200 shadow-md mt-2">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
          <thead className="bg-indigo-50">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-2 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-gray-900 lg:text-base sm:text-sm"
              >
                Deprtment Name
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
            {departments.map((department, index) => (
              <tr key={department.id} className="hover:bg-indigo-100">
                <td className="px-6 py-2.5 text-gray-700">{index + 1}</td>
                <td className="px-6 py-2.5 text-gray-700">
                  {department.name}
                </td>{" "}
                <td>
                  <div className="flex gap-2">
                    <UpdateDepartment department={department} />
                    <DeleteDepartment department={department} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
