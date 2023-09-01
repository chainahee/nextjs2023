import React from "react";
import Inforemployee from "@/components/borrow/inforemployee";
import TableBorrow from "@/components/borrow/TableBorrow";

function Borrow() {
  return (
    <div className="py-3 h-full overflow-scroll">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-indigo-600 font-medium">
          Borrow - Rertrun Device
        </h1>
      </div>
      <div className="rounded-lg border-2 py-5 mt-4 px-3">
        <h1 className="text-indigo-600 pb-3 font-medium text-lg">
          Employee Information
        </h1>
        <Inforemployee />
      </div>

      <div className="rounded-lg border-2 py-5 mt-4 px-3">
        <h1 className="text-indigo-600 pb-3 font-medium text-lg">
          Borrow - Retrun Devices Information
        </h1>
        <TableBorrow />
      </div>
    </div>
  );
}

export default Borrow;
