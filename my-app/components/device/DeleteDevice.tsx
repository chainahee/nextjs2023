"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsTrash } from "react-icons/bs";

function DeleteDevice({ id }) {
  const router = useRouter();
  const removeDevice = async () => {
    const confrirmed = confirm("Are you sure?");
    if (confrirmed) {
      const res = await fetch(`http://localhost:3000/api/device?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={removeDevice}
      className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10 gap-2"
    >
      {" "}
      Delete <BsTrash className="text-lg" />
    </button>
  );
}

export default DeleteDevice;
