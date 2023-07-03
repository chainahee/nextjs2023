import Link from "next/link";
import React from "react";

function layout({ children }) {
  return (
    <div className="">
      {/* button back to main brand page  */}
      <div className="max-w-4xl mx-auto">
        <Link href={"/settings/branch"} className="bg-purple-300 px-3.5 py-2 text-white rounded-md">
          Back to Manage Brand
        </Link>
      </div>
      {children}
    </div>
  );
}

export default layout;
