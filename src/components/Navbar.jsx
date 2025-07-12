import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="ml-2 font-bold text-lg">Move Vision</span>
      </div>
      <div className="space-x-4">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#prices" className="hover:underline">Prices</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="/signup" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded">Sign Up</a>
        <a href="/login" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Log In</a>
      </div>
    </nav>
  );
}
