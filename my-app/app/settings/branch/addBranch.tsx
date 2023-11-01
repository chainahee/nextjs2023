"use client";
import React, { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddBranch = () => {
  const [name, setName] = useState("");

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/branch", {
      name: name,
    });
    setName("");
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-outline btn-primary btn-sm"
        onClick={handleModal}
      >
        Add New Branch
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-900">Add New Branch</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-3">
              <label className="block text-sm font-medium leading-6 text-gray-900 text-start">
                Branch Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBranch;
