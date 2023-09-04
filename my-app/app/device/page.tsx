import React from "react";
import Link from "next/link";
import DeleteDevice from "@/components/device/DeleteDevice";
import { BsPencilSquare, BsSearch } from "react-icons/bs";

const getDevices = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/device", {
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

async function Device() {
  const { devices } = await getDevices();
  // นับวันที่หมดประกัน


  // console.log(currentDate);

  return (
    <div className="grid place-items-center bg-white">
      <div className="text-center">
        <p className="sm:text-2xl font-medium text-indigo-600 text-xl">
          Device Management
        </p>
        <div className="my-3">
          <Link
            href={"/device/add"}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Device
          </Link>
        </div>
      </div>
      <div className="overflow-scroll h-[400px] w-full rounded-lg border border-gray-200 shadow-md mt-2">
        <table className="table-auto w-full border-collapse bg-white text-gray-500 text-sm">
          <thead className="bg-indigo-50">
            <tr className="">
              <th className="px-3 py-2.5 text-gray-900 font-medium">No</th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">
                Serail Number
              </th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">
                Name Device
              </th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">Brand</th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">
                Category
              </th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">
                End Date Warrantry
              </th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">Status</th>
              <th className="px-3 py-2.5 text-gray-900 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-left border-t border-gray-100 text-sm">
            {devices.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-700">{index + 1}</td>
                <td className="px-6 py-3 text-gray-700">{item.serial}</td>
                <td className="px-6 py-3 text-gray-700">{item.name}</td>
                <td className="px-6 py-3 text-gray-700">{item.brand}</td>
                <td className="px-6 py-3 text-gray-700">{item.category}</td>
                <td
                  className={`px-6 py-3 text-gray-700 ${
                    new Date(item.endDate) < new Date() ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {new Date(item.endDate).toLocaleDateString("en-GB")}{" "}
                  {new Date(item.endDate) < new Date() ? "Expired" : ""}
                  {new Date(item.endDate) > new Date() ? 'Active' : ''}
                </td>
                <td className="px-6 py-3 text-gray-700">{item.status}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <Link href={`/device/update/${item._id}`}>
                      <button className="gap-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        Update <BsPencilSquare className="text-lg" />
                      </button>
                    </Link>
                    <div className="">
                      <DeleteDevice id={item._id} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Device;
