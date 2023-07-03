import React from "react";
import UpdateFormCategory from "@/components/category/UpdateFormCategory";

const getCategoryById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/category/${id}`, {
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
  const { category } = await getCategoryById(id);
  const { name } = category;
  console.log(id);
  return <UpdateFormCategory id={id} name={name} />;
}

export default UpdateCategory;
