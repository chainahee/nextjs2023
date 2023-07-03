"use client";
import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useRouter } from "next/navigation";

function DeleteDepartment({ id }) {
  const router = useRouter();
  const removeBrand = async () => {
    const confrirmed = confirm("Are you sure?");
    if (confrirmed) {
      const res = await fetch(`http://localhost:3000/api/department?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeBrand}>
      <FcDeleteDatabase className="text-3xl" />
    </button>
  );
}

export default DeleteDepartment;
