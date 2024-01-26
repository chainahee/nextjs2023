"use client";
import React, { SyntheticEvent, useState } from "react";
import { department, branch, status } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

function AddEmployee({
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
          <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box w-11/12 max-w-5xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <h1 className="font-bold text-lg text-gray-900">
                  Add Employee
                </h1>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
                  <div className="">
                    <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                      Employee ID :
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        value={employeeID}
                        onChange={(e) => setEmployeeID(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                      FullName :
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                      Email :
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
                  <div className="">
                    <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                      Department :
                    </label>
                    <div className="mt-3">
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                      Branch :
                    </label>
                    <div className="mt-3">
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                      Status :
                    </label>
                    <div className="mt-3">
                      <select
                        value={statuss}
                        onChange={(e) => setStatus(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 pt-10">
                  {!isLoading ? (
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:w-auto"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 loading sm:mt-0 sm:w-auto"
                    >
                      Saving...
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddEmployee;
