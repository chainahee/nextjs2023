import React from "react";
import UpdateFromDevice from "@/components/device/UpdateFromDevice";

const getDeviceById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/device/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch brand");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

async function UpdateDevice({ params }) {
  const { id } = params;
  const { device } = await getDeviceById(id);
  const {
    name,
    serail,
    disc,
    brand,
    category,
    status,
    startDate,
    endDate,
    price,
  } = device;
  console.log(id);
  return (
    <UpdateFromDevice
      id={id}
      name={name}
      serail={serail}
      disc={disc}
      brand={brand}
      category={category}
      status={status}
      startDate={startDate}
      endDate={endDate}
      price={price}
    />
  );
}

export default UpdateDevice;
