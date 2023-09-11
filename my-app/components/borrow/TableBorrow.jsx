import React from "react";

function TableBorrow() {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="serial"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Serail Number :
            </label>
            <input
              type="text"
              name="serial"
              id="serial"
              placeholder="Serail Number"
              className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-3 flex items-center">
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60 my-3">
              Add
            </button>
          </div>
        </div>
      </form>
      <table className="table-auto max-h-20 overflow-y-auto md:table-fixed w-full border-collapse bg-white text-left text-sm text-gray-500 mt-3">
        <thead className="bg-gray-50">
          <tr className="px-3">
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              No.
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Serail Number
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Category
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Borrow Date
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y max-h-12 overflow-y-auto divide-gray-100 border-t border-gray-100">
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>
              <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60 my-3">
                Return
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableBorrow;
