"use client";
import React from "react";
import { useRouter } from "next/navigation";

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
  return <button onClick={removeDevice}>Delete</button>;
}

export default DeleteDevice;
