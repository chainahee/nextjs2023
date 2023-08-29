"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsTrash } from 'react-icons/bs';

function DeleteBranch({ id }) {
  const router = useRouter();
  const removeBrand = async () => {
    const confrirmed = confirm("Are you sure?");
    if (confrirmed) {
      const res = await fetch(`http://localhost:3000/api/branch?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={removeBrand}
      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#FA8072] to-[#FC799F] hover:from-[#CD5C5C] hover:to-[#D63A67]"
    >
      <span className="text-white font-medium flex items-center gap-2">
        Delete <BsTrash className="text-lg" />
      </span>
    </button>
  );
}

export default DeleteBranch;
