"use client";
import React, { useState } from "react";
import type { department, branch } from "@prisma/client";

function addEmployee({
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

              <form>
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
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}

export default addEmployee;
