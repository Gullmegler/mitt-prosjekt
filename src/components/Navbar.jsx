import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#111144] text-white">
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center flex-1">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="hidden md:block">
        <Link
          to="/login"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
        >
          Log In
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111144] text-white flex flex-col items-center md:hidden">
          <Link to="/" className="py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/login" className="py-2" onClick={() => setIsOpen(false)}>
            Log In
          </Link>
          <Link to="/signup" className="py-2" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
