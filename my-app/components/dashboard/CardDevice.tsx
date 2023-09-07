"use client";
import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import Link from "next/link";

const getEmployee = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/device", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch brands");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading brands", error);
  }
};

async function CardDevice() {
  const { devices } = await getEmployee();
  const employeeCount = devices.length;
  const currentDate = new Date();
  const formattedCurrentDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  // คำนวณจำนวนข้อมูลที่ได้
  //   const employeeCount = employees.length;

  //   console.log(employees);
  //   console.log(employeeCount);

  return (
    <div className="container p-5">
      <header>
        <span className="font-medium sm:text-2xl text-gray-800 text-base">
          Devices List.
        </span>
      </header>
      <div className="mt-5">
        <span className="font-medium text-gray-800 text-lg">
          <span className="text-4xl text-indigo-500 font-semibold"> {employeeCount} </span>{" "}
          Results.
        </span>
      </div>

      <Link href={"/device"} className="mt-3 flex justify-between">
        <span className="text-gray-500 text-sm">As of {formattedCurrentDate}.</span>
        <div className="flex items-center justify-center gap-2">
          {" "}
          <span className="tex-lg">See Detail</span>{" "}
          <BsArrowRightSquare className="text-xl text-indigo-500" />
        </div>
      </Link>
    </div>
  );
}

export default CardDevice;
