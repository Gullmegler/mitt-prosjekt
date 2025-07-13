import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 font-bold text-lg">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span>AI REMOVALS ©</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="benefits"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Benefits
          </Link>
          <Link
            to="prices"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Prices
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition"
          >
            FAQ
          </Link>
          <Link
            to="calltoaction"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition"
          >
            Contact
          </Link>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
