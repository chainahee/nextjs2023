"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DeleteStatusEmployee({ id }) {
  const router = useRouter();
  const removeBrand = async () => {
    const confrirmed = confirm("Are you sure?");
    if (confrirmed) {
      const res = await fetch(`http://localhost:3000/api/statusemployee?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeBrand}>
      Delete
    </button>
  );
}

export default DeleteStatusEmployee;
