import React from "react";
import Inforemployee from "@/components/borrow/inforemployee";
import TableBorrow from "@/components/borrow/TableBorrow";

function Borrow() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-indigo-800 font-semibold">
          Borrow - Rertrun Device
        </h1>
      </div>
      <div className="rounded-lg border-2 py-5 mt-4 px-3">
        <h1 className="text-indigo-800 pb-3 font-semibold">
          Employee Information
        </h1>
        <Inforemployee />
      </div>

      <div className="rounded-lg border-2 py-5 mt-4 px-3">
        <h1 className="text-indigo-800 pb-3 font-semibold">
          Borrow - Retrun Devices Information
        </h1>
        <TableBorrow />
      </div>
    </div>
  );
}

export default Borrow;
