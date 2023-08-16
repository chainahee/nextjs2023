import React from "react";
import Link from "next/link";
import DeleteDevice from "@/components/device/DeleteDevice";

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

  return (
    <div className="grid place-items-center bg-white">
      {" "}
      <div className="text-center">
        <p className="text-3xl font-bold text-indigo-600">Device Management</p>
        <div className="my-5">
          <Link
            href={"/device/add"}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Device
          </Link>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="table-auto md:table-fixed w-full border-collapse bg-white text-left text-sm text-gray-500 ">
            <thead className="bg-gray-50">
              <tr className="px-3">
                <th scope="col" className="px-6 py-2 font-medium text-gray-900">
                  No
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Serail Number
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Name
                </th>

                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  brand
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Category
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  End Date Warrantry
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {devices.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-2">{index + 1}</td>
                  <td className="px-6 py-2">{item.serial}</td>
                  <td className="px-6 py-2">{item.name}</td>
                  <td className="px-6 py-2">
                    {item.brand}
                  </td>
                  <td className="px-6 py-2">{item.category}</td>
                  <td className="px-6 py-2">
                    {new Date(item.endDate).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-6 py-2">{item.status}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/device/update/${item._id}`}>
                        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Edit
                        </button>
                      </Link>
                      <div className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
    </div>
  );
}

export default Device;
