"use client";
import Link from "next/link";

import React, { useState } from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { FcEditImage, FcSearch } from "react-icons/fc";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DeleteBranch from "@/components/branch/DeleteBranch";

const getBranchs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/branch", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch brands");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading brand", error);
  }
};

async function Brand() {
  const [globalFilter, setGlobalFilter] = useState(null);
  const { branchs } = await getBranchs();
  const indexColumnTemplate = (rowData, column) => {
    return column.rowIndex + 1;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <div className="flex gap-4">
          <Link href={`/settings/branch/update/${rowData._id}`}>
            <FcEditImage className="text-3xl" />
          </Link>

          <DeleteBranch id={rowData._id} />
        </div>
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 items-center justify-end">
      <span className="flex items-center">
        <FcSearch />
        <input
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search......"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></input>
      </span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="bg-red-50 p-3 flex items-center justify-between rounded-lg">
        <h1 className="text-xl text-purple-600 font-bold">Manage Branch.</h1>
        <Link href={"/settings/branch/add"}>
          <button className="bg-purple-400 rounded-lg border hover:border-purple-400 hover:bg-white ">
            <span className="flex items-center px-5 py-2 gap-2 text-white hover:text-purple-700">
              {" "}
              Add Branch
              <BsDatabaseAdd />
            </span>
          </button>
        </Link>
      </div>

      <hr className="my-6" />
      <div className="flex items-center justify-center max-w-4xl mx-auto">
        <DataTable
          value={branchs}
          showGridlines
          stripedRows
          header={header}
          globalFilter={globalFilter}
          paginator
          rows={10}
          style={{ fontSize: "15px", backgroundColor: "var(--primary-color)" }}
          rowsPerPageOptions={[10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column header="No." body={indexColumnTemplate}></Column>
          <Column field="name" header="Name" sortable></Column>
          <Column body={actionBodyTemplate} header="Action"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Brand;
