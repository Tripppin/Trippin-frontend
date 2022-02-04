import React from "react";

import { Link, useLocation } from "react-router-dom";

function Hire() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  return (
    <div className="experiences">
      <div className="experience_section1 ">
        {/* stories */}
        <div className="experience_header flex w-max  space-x-2  text-md text-center md:space-x-12 mt-14 md:text-lg  mx-auto">
          {path === "homestay" ? (
            <Link
              to="/hire/homestay"
              className="px-3 py-2 rounded-xl border-2 border-gray-200 shadow-md md:shadow-lg text-center w-full"
            >
              <h1 className="border-b-2 px-1 border-red-500"> Homestay</h1>
            </Link>
          ) : (
            <Link
              to="/hire/homestay"
              className="px-3 py-2 rounded-xl border-2 border-gray-200 shadow-md md:shadow-lg text-center w-full"
            >
              Homestay
            </Link>
          )}
          {path === "guide" ? (
            <Link
              to="/hire/guide"
              className="px-3 py-2 rounded-xl border-2 border-gray-200 shadow-md md:shadow-lg text-center w-full"
            >
              <h1 className="border-b-2 px-1 border-red-500"> Guide</h1>
            </Link>
          ) : (
            <Link
              to="/hire/guide"
              className="px-3 py-2 rounded-xl border-2 border-gray-200 shadow-md md:shadow-lg text-center w-full"
            >
              Guide
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hire;
