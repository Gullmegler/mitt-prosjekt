import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-[#111144] text-white relative">
      <div className="flex items-center lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex space-x-6">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#prices" className="hover:underline">Pricing</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#survey" className="hover:underline">AI Survey</a>
      </div>

      <div className="flex justify-center flex-1">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      <div className="hidden lg:flex">
        <Link to="/login" className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition">
          Log In
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111144] flex flex-col items-center space-y-4 p-4 lg:hidden">
          <a href="#benefits" onClick={() => setIsOpen(false)} className="w-full text-center hover:underline">Benefits</a>
          <a href="#prices" onClick={() => setIsOpen(false)} className="w-full text-center hover:underline">Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="w-full text-center hover:underline">FAQ</a>
          <a href="#survey" onClick={() => setIsOpen(false)} className="w-full text-center hover:underline">AI Survey</a>
          <Link to="/login" className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition w-full text-center">
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
