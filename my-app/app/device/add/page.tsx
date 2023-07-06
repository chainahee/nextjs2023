"use client";
import React from "react";
import { useState, useEffect } from "react";

const getBrands = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/brand", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch brands");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading brand", error);
  }
};

const getCategory = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/category", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch brands");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading brand", error);
  }
};

async function AddDevice() {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [brand, setBrand] = useState("");
  const { brands } = await getBrands();
  const { categorys } = await getCategory();

  return (
    <div className="">
      <div className="mx-auto">
        <div className="flex items-center justify-center my-5">
          <h1 className="text-2xl font-bold">Form Add Device</h1>
        </div>
        <div className="">
          <form>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Serial Number :
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={serial}
                      name="Serial-Number"
                      id="Serial-Number"
                      onChange={(e) => setSerial(e.target.value)}
                      autoComplete="given-name"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name :
                  </label>
                  <div className="mt-2">
                    <input
                      value={name}
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="family-name"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="Brand"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Brand :
                  </label>
                  <div className="mt-2">
                    <select
                      id="Brand"
                      name="Brand"
                      value={brands}
                      autoComplete="Brand"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {brands.map((itme) => (
                        <option key={itme.id} value={itme.id}>
                          {itme.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="Category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category :
                  </label>
                  <div className="mt-2">
                    <select
                      id="Category"
                      name="Category"
                      value={categorys}
                      autoComplete="Category-name"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {categorys.map((itme) => (
                        <option key={itme.id} value={itme.id}>
                          {itme.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="End Date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Status :
                  </label>
                  <div className="mt-2">
                    <select
                      id="Category"
                      name="Category"
                      autoComplete="Category-name"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>Ready</option>
                      <option>Active</option>
                      <option>Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="Start Date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Date Warranty :
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="startdate"
                      id="Start-Date"
                      autoComplete="address-level2"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="End Date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End Date Warranty :
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="enddate"
                      id="End-Date"
                      autoComplete="address-level1"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="disc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Discrip :
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="disc"
                      name="disc"
                      rows={3}
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about device.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDevice;
