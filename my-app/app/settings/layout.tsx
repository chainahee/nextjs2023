import React from "react";
import Link from "next/link";

function layout({ children }) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Link href="/settings">
            <button className="p-3 bg-purple-700">Back</button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

export default layout;
