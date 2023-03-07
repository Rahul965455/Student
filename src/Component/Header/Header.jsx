import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
           
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <NavLink
                  to="/"
                  className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  Add Student
                </NavLink>
              </div>
              <div className="ml-3 relative">
                <NavLink
                  to="/table"
                  className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  Show Students
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;