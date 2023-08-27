import Link from "next/link";
import React from "react";

const AdminNavlist = () => {
  return (
    <>
      <div className="group relative">
        <button className="text-white hover:text-secondary">Restaurant</button>
        <ul className="hidden z-50 group-hover:block absolute w-auto">
          <div className="bg-white text-gray-800 rounded shadow-lg mt-1 py-1">
            <li>
              <Link
                href="/restaurant"
                className="block px-2 py-1 hover:bg-gray-100"
              >
                All Restaurant
              </Link>
            </li>
            <li>
              <Link
                href="/restaurant/add"
                className="block px-2 py-1 hover:bg-gray-100"
              >
                Add Restaurant
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="group">
        <button className="text-white hover:text-secondary">Food</button>
        <ul className="hidden z-50 group-hover:block absolute w-auto">
          <div className="bg-white text-gray-800 rounded shadow-lg mt-1 py-1">
            <li>
              <Link href="/food" className="block px-2 py-1 hover:bg-gray-100">
                All Food
              </Link>
            </li>
            <li>
              <Link
                href="/food/add"
                className="block px-2 py-1 hover:bg-gray-100"
              >
                Add Food
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default AdminNavlist;
