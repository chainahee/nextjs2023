"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function category() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url =
      "https://api.sheety.co/44479527e747ab85f4e207639e81a9fb/databaseBorrowandRetrunIt/brand";
    const res = await axios.get(url);
    setData(res.data.brand);
  };

  useEffect(() => {
    fetchData();
  }, []);

 console.log(data);
 

  return (
    <div className="container mx-auto">
      <table className="w-full bg-purple-300 rounded-lg">
        <thead>
          <tr className="p-4">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((val,index) => (
            <tr key={val.id} className="py-3">
              <td>{index +1}</td>
              <td>{val.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default category;
