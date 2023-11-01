"use client";
import React, { useState, SyntheticEvent } from "react";
import type { department, branch } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddEmployee({
  departments,
  branchs,
}: {
  departments: department[];
  branchs: branch[];
}) {
  const [employeeID, setEmployeeID] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [branch, setBranch] = useState("");
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/employees", {
      employeeID: employeeID,
      fullname: fullname,
      email: email,
      departmentId: Number(department),
      branchId: Number(branch),
      isActive: isActive,
    });
    setIsLoading(false);
    setEmployeeID("");
    setFullName("");
    setEmail("");
    setDepartment("");
    setBranch("");
    setIsActive("");
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3>Add New Employee</h3>
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
                value={isActive}
                onChange={(e) => setIsActive(e.target.value)}
                className="select select-primary w-full max-w-xs"
              >
                <option disabled value="">
                  Select Status
                </option>
                <option>Active</option>
                <option>On Leave</option>
              </select>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
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
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
