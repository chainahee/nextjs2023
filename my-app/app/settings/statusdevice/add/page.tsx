"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function AddStatusDevice() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/statusdevice", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        router.push("/settings/statusdevice");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-5 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center my-5">
          <h1 className="text-2xl font-bold">Form Add Status Device</h1>
        </div>
        <div className="">
          <form onSubmit={handlerSubmit}>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex items-center justify-center mb-5">
              <button
                type="submit"
                className="bg-purple-400 w-2/6 px-4 py-2 rounded-lg text-white mt-8 hover:bg-white hover:border-purple-400  hover:text-purple-800 border"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStatusDevice;
