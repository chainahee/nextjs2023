"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function UpdateFormBrand({ name, id, brand_id }) {
  const [newName, setName] = useState(name);
  const [newBrand_id, setBrandId] = useState(brand_id);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/brand/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newBrand_id }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }
      router.push("/settings/brand");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-500">
          Form Update Branch
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="serial"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand ID :
            </label>
            <input
              type="text"
              value={newBrand_id}
              placeholder="Brand ID"
              onChange={(e) => setBrandId(e.target.value)}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="Name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name Brand :
            </label>
            <input
              type="text"
              value={newName}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/settings/brand">
            <span className="rounded-md bg-red-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
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
  );
}

export default UpdateFormBrand;
