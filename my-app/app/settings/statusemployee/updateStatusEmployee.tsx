"use client";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Status = {
  id: number;
  name: string;
};

function UpdateStatus({ status }: { status: Status }) {
  const [name, setName] = useState(status.name);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.patch(`/api/statusemployee/${status.id}`, {
      name: name,
    });
    setIsLoading(false);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="btn btn-outline btn-secondary btn-sm"
        onClick={handleModal}
      >
        Update
      </button>
      {isOpen && (
        <div className={isOpen ? "modal modal-open" : "modal"}>
          <div className="modal-box">
            <h3 className="font-bold text-lg text-gray-900">
              Update <a className="text-red-400">"{status.name}"</a>
            </h3>
            <form onSubmit={handleUpdate}>
              <div className="mt-3">
                <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                  Branch Name
                </label>
                <div className="mt-2">
                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6 modal-action">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={handleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateStatus;
