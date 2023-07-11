"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function UpdateFormStatusDevicce({ name, id }) {
  const [newName, setName] = useState(name);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/statusdevice/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }
      router.push("/settings/statusdevice");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-5 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center my-3">
          <h1 className="text-2xl font-bold">Form Update Status Device</h1>
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
          <div className="flex items-center justify-center mb-5">
            <button
              type="submit"
              className="bg-purple-400 w-2/6 px-4 py-2 rounded-lg text-white mt-8 hover:bg-white hover:border-purple-400  hover:text-purple-800 border"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateFormStatusDevicce;
