import React from "react";

export default function Navbar() {
  return (
    <nav
      className="w-full fixed top-0 left-0 z-50"
      style={{
        background: "linear-gradient(180deg, #E2D5FF 0%, #6A58D3 50%, #1D1B4F 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl">AI REMOVALS</div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#benefits" className="hover:underline">Benefits</a>
          <a href="#prices" className="hover:underline">Prices</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/signup" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg">Sign Up</a>
          <a href="/login" className="border border-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-500">Log In</a>
        </div>
      </div>
    </nav>
  );
}
