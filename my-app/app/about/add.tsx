"use client";
import React, { SyntheticEvent, useState } from "react";
import { department, branch, status } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

function addEmployee({
  departments,
  branchs,
  status,
}: {
  departments: department[];
  branchs: branch[];
  status: status[];
}) {
  const [employeeID, setEmployeeID] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [branch, setBranch] = useState("");
  const [statuss, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/api/employee", {
      employeeID: employeeID,
      fullname: fullname,
      email: email,
      departmentId: Number(department),
      branchId: Number(branch),
      statusId: Number(statuss),
    });
    setIsLoading(false);
    setEmployeeID("");
    setFullName("");
    setEmail("");
    setDepartment("");
    setBranch("");
    setStatus("");
    router.refresh();
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-primary btn-sm"
        onClick={openModal}
      >
        Add Employee
      </button>
      {isOpen && (
        <div className="">
          <div className="modal modal-open ">
            <div className="modal-box w-11/12 max-w-5xl">
              <h1 className="text-2xl font-bold">Add Employee</h1>

              <form onSubmit={handleSubmit}>
                <div className="from-control w-full">
                  <label className="label font-bold">Employee ID :</label>
                  <input
                    type="text"
                    value={employeeID}
                    onChange={(e) => setEmployeeID(e.target.value)}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="from-control w-full">
                  <label className="label font-bold">FullName :</label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="from-control w-full">
                  <label className="label font-bold">Email :</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="from-control w-full">
                  <label className="label font-bold">Department :</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option disabled value="">
                      Select Department
                    </option>
                    {departments.map((deparment) => (
                      <option value={deparment.id} key={deparment.id}>
                        {deparment.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="from-control w-full">
                  <label className="label font-bold">Branch :</label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option disabled value="">
                      Select Branch
                    </option>
                    {branchs.map((branch) => (
                      <option value={branch.id} key={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="from-control w-full">
                  <label className="label font-bold">Status :</label>
                  <select
                    value={statuss}
                    onChange={(e) => setStatus(e.target.value)}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option disabled value="">
                      Select Status
                    </option>
                    {status.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="modal-action">
                  {!isLoading ? (
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  ) : (
                    <button type="button" className="btn loading">
                      Saving...
                    </button>
                  )}
                </div>
              </form>
              <div className="modal-action">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default addEmployee;
