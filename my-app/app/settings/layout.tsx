import React from "react";
import Link from "next/link";

function layout({ children }) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Link href="/settings">
            <button className="px-4 py-1 bg-gradient-to-b from-purple-400 to-pink-400 text-white rounded-lg">Back</button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

export default layout;
