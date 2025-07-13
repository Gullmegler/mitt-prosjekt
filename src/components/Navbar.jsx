import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-lg font-bold">AI REMOVALS</span>
      </div>
      <div className="space-x-4">
        <a href="#benefits" className="hover:text-pink-500">Benefits</a>
        <a href="#aisurvey" className="hover:text-pink-500">AI Survey</a>
        <a href="#prices" className="hover:text-pink-500">Prices</a>
        <a href="#faq" className="hover:text-pink-500">FAQ</a>
        <a href="#calltoaction" className="hover:text-pink-500">Contact</a>
        <Link to="/signup" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
        <Link to="/login" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Log In</Link>
      </div>
    </nav>
  );
}
