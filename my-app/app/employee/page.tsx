"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Employee() {
  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="text-3xl font-bold text-indigo-600">Employee Management</p>
        <div className="my-4">
          <Link
          href={"/employee/add"} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Employee</Link>
        </div>
      </div>
    </div>
  );
}

export default Employee;
