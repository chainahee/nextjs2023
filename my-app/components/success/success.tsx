import React from "react";
import { BsCheckAll } from "react-icons/bs";

function Success({ message }) {
  return (
    <div className="mx-auo">
      <div className="flex items-center gap-2 justify-center mx-auto border border-yellow-200 bg-yellow-50 w-3/6 text-gray-800 text-md my-4 py-2 rounded-lg">
        {message}
        <BsCheckAll className="text-green-500 text-xl" />
      </div>
    </div>
  );
}

export default Success;
