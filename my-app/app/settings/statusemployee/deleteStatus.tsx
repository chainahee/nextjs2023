"use client";
import React, { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Status = {
  id: number;
  name: string;
};

const DeleteStatus = ({ status }: { status: Status }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async (StatusId: number) => {
    await axios.delete(`/api/statusemployee/${StatusId}`);
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
        <div className={isOpen ? "modal modal-open" : "modal"}>
          <div className="modal-box">
            <h3 className="font-bold text-lg text-gray-900">
              Are sure to delete this data
              <a>{status.name}</a> ?
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
                onClick={() => handleDelete(status.id)}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteStatus;
