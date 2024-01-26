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
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="text-xl">
                Are you sure to delete{" "}
                <a className="text-red-400">"{employee.fullname}"</a> this data?
              </h3>

              <div className="modal-action">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                  No
                </button>
              </div>

              <div className="modal-action">
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                  Yes
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
