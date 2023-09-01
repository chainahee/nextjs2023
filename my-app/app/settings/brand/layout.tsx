import React from "react";
import Link from "next/link";
function layout({ children }) {
  return (
    <div className="">
      <Link href="/settings">
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Back to Settings Page
        </button>
      </Link>
      {children}
    </div>
  );
}

export default layout;
