import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-white font-bold text-lg">AI REMOVALS ©</span>
      </div>
      <div className="flex space-x-4">
        <a href="#benefits" className="text-white hover:underline">Benefits</a>
        <a href="#prices" className="text-white hover:underline">Prices</a>
        <a href="#faq" className="text-white hover:underline">FAQ</a>
        <Link to="/signup">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}
