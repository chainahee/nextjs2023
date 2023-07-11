"use client";
import React, { useState, useEffect } from "react";

function Employee() {
  const [brands, setBrands] = useState([]);
  const [selectBrand, setSelectBrand] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/brand");
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data.brands);
      } catch (error) {
        console.log("Error loading brands", error);
      }
    };

    fetchBrands();
  }, []);

console.log(selectBrand);


  return (
    <div>
      <label htmlFor="brand">Brand:</label>
      <select
        id="brand"
        name="brand"
        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={selectBrand}
        onChange={(e) => setSelectBrand(e.target.value)}
      >
        <option value="">Select a brand</option>
        {brands.map((brand) => (
          <option key={brand._id} value={brand._id}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Employee;
