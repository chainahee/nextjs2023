import React, { useReducer } from "react";
import Success from "../success/success";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function From() {
  const [fromData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(fromData).length == 0)
      return console.log("Don't have From Data");
    console.log(fromData);
  };

  if (Object.keys(fromData).length > 0)
    return <Success message={"Data added"}></Success>;

  return (
    <div className="max-auto container mb-5 ">
      <div className="flex items-center justify-center my-3">
        <h1 className="text-2xl font-bold">Form Add Brand</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={setFormData}
            required
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center justify-center mb-5">
          <button className="bg-purple-400 w-2/6 px-4 py-2 rounded-lg text-white mt-8 hover:bg-white hover:border-purple-400  hover:text-purple-800 border">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default From;
