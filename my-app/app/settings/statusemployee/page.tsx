"use client";
import Link from "next/link";
import React from "react";
import { BsDatabaseAdd } from "react-icons/bs";

const StatusEmployee = () => {
  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-indigo-600">
          Status Employee Management
        </h1>
        <Link href={"/settings/statusemployee/add"}>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5">
            <span className="flex items-center gap-2">
              Add Status Employee
              <BsDatabaseAdd />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StatusEmployee;
