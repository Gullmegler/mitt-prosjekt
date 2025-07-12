import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0d1117] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12" // større logo som ønsket
          />
        </Link>
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#benefits" className="hover:text-gray-400">Benefits</a>
          <a href="#prices" className="hover:text-gray-400">Prices</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <a href="#faq" className="hover:text-gray-400">FAQ</a>
        </div>
      </div>
      <div className="flex space-x-3">
        <Link
          to="/signup"
          className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="border border-white text-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}
