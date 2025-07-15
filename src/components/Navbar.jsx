import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111144] text-white px-4 py-3 flex items-center justify-between">
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
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
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link
          to="/login"
          className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#111144] transition"
        >
          Login
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#111144] flex flex-col items-center md:hidden">
          <Link to="/" className="py-2 hover:underline" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/signup" className="py-2 hover:underline" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
          <Link to="/login" className="py-2 hover:underline" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
