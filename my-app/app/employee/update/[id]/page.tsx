import React from "react";
import UpdateFromEmployee from "@/components/employee/UpdateFromEmployee";

const getEmployeeById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/employee/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch employee");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

async function UpdateEmployee({ params }) {
  const { id } = params;
  const { employee } = await getEmployeeById(id);
  const { employeeid, fullname, department, branch, status } = employee;
  console.log(id);
  return (
    <UpdateFromEmployee
      id={id}
      employeeid={employeeid}
      fullname={fullname}
      department={department}
      branch={branch}
      status={status}
    />
  );
}

export default UpdateEmployee;
