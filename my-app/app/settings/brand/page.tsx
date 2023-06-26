"use client"
import React, { useState, useEffect } from 'react';

const Brand = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/brand', {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await res.json();
        setData(Array.isArray(jsonData) ? jsonData : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;
