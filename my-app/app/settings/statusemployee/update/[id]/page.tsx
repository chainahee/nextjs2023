import React from "react";
import UpdateFormStatusEmployee from "@/components/statusemployee/UpdateFormStatusEmployee";

const getStatusDeviceById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/statusemployee/${id}`, {
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
  const { statusEmployee } = await getStatusDeviceById(id);
  const { name } = statusEmployee;
  console.log(id);
  return <UpdateFormStatusEmployee id={id} name={name} />;
}

export default UpdateStatusDevice;
