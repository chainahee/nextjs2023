import React from "react";
import UpdateFormDepartment from "@/components/department/UpdateFormDepartment";

const getDepartmentById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/department/${id}`, {
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

async function UpdateCategory({ params }) {
  const { id } = params;
  const { department } = await getDepartmentById(id);
  const { name } = department;
  console.log(id);
  return <UpdateFormDepartment id={id} name={name} />;
}

export default UpdateCategory;
