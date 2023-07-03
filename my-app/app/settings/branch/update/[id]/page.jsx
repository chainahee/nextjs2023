import React from "react";
import UpdateFormBranch from "@/components/branch/UpdateFormBranch";

const getBranchById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/branch/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch branch");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

async function UpdateBranch({ params }) {
  const { id } = params;
  const { branch } = await getBranchById(id);
  const { name } = branch;
  console.log(id);
  return <UpdateFormBranch id={id} name={name} />;
}

export default UpdateBranch;
