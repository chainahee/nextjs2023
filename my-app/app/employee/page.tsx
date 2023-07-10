"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Employee() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/brand");
        setBrands(Object.values(response.data)); // แปลงเป็นอาร์เรย์ของข้อมูลแบรนด์
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Type of brands:", typeof brands);
  console.log("Brands data:", brands);

  return (
    <div>
      <label htmlFor="brand">Brand:</label>
      <select id="brand" name="brand">
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
