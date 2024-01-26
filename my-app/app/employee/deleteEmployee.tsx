"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Employee = {
  id: number;
  employeeID: string;
  fullname: string;
  email: string;
  departmentId: number | null;
  branchId: number | null;
  statusId: number | null;
};

const DeleteEmployee = ({ employee }: { employee: Employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async (employeeId: number) => {
    await axios.delete(`/api/employee/${employeeId}`);
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
        Delete
      </button>
      {isOpen && (
        <div className="">
          <div className="modal modal-open ">
            <div className="modal-box">
              <h3 className="text-xl">
                Are you sure to delete{" "}
                <a className="text-red-400">"{employee.fullname}"</a> this data?
              </h3>
              <div className="flex items-center justify-end gap-x-6 modal-action pt-10">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>

                <button
                  onClick={() => handleDelete(employee.id)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteEmployee;
