"use client";
import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import Link from "next/link";

const getEmployee = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/employee", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch employee");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading employee", error);
  }
};

async function CardEmployee() {
  const { employees } = await getEmployee();
  const employeeCount = employees.length;
  const currentDate = new Date();
  const formattedCurrentDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  // คำนวณจำนวนข้อมูลที่ได้
  // const employeeCount = employees.length;

  // console.log(employees);
  // console.log(employeeCount);

  return (
    <div className="container p-5 lg:border-r">
      <header className="md:flex justify-between items-center sm:flex-none sm:gap-y-2">
        <h1 className="font-medium sm:text-2xl text-gray-800 text-base">
          Employees List.
        </h1>
        <h1 className="text-gray-500 lg:text-sm text-xs">
          As of {formattedCurrentDate}.
        </h1>
      </header>
      <div className="mt-5">
        <span className="sm:text-sm font-medium text-gray-800 md:text-lg text-center">
          <span className="text-4xl text-indigo-500 font-semibold">
            {" "}
            {employeeCount}{" "}
          </span>{" "}
          Results.
        </span>
      </div>

      <div className="flex items-center justify-end mt-3">
        {" "}
        <Link href={"/employee"} className="flex items-center gap-2">
          <span className="lg:text-sm text-xs text-indigo-400 hover:text-indigo-600 hover:font-medium">
            See Detail
          </span>{" "}
          <BsArrowRightSquare className="text-xl text-indigo-500 hover:bg-indigo-100" />
        </Link>
      </div>
    </div>
  );
}

export default CardEmployee;
