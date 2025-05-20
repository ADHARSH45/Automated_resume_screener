import React from "react";

const PageWithNavbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My App</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Body Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-10">
        <h2 className="text-2xl font-semibold text-gray-700">
          Welcome to My Simple Page with Navbar!
        </h2>
      </div>
    </div>
  );
};

export default PageWithNavbar;
