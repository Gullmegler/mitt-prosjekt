import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4 flex justify-between items-center text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 md:h-16 md:w-16" />
      </div>
      <div className="space-x-4 text-sm">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#upload" className="hover:underline">Free Test</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#login" className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
