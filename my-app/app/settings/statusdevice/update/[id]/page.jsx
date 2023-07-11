import React from "react";
import UpdateFormStatusDevice from "@/components/statusdevice/UpdateFormStatusDevice";

const getStatusDeviceById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/statusdevice/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch category");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

async function UpdateStatusDevice({ params }) {
  const { id } = params;
  const { statusdevices } = await getStatusDeviceById(id);
  const { name } = statusdevices;
  console.log(id);
  return <UpdateFormStatusDevice id={id} name={name} />;
}

export default UpdateStatusDevice;
