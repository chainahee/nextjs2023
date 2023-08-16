"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function UpdateFormStatusEmployee({ name, id }) {
  const [newName, setName] = useState(name);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/statusemployee/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }
      router.push("/settings/statusemployee");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-5 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center my-3">
          <h1 className="text-2xl font-bold text-indigo-500">Form Update Status Employee</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              onChange={(e) => setName(e.target.value)}
              value={newName}
              type="text"
              placeholder="Name"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/settings/statusemployee">
            <span className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </span>
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateFormStatusEmployee;
