import React from "react";
import UpdateFormBrand from "@/components/brand/UpdateFormBrand";

const getBrandById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/brand/${id}`, {
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

async function UpdateBrand({ params }) {
  const { id } = params;
  const { brand } = await getBrandById(id);
  const { name } = brand;
  console.log(id);
  return <UpdateFormBrand id={id} name={name} />;
}

export default UpdateBrand;
