import React from "react";

export default function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-4"
      style={{
        background: "linear-gradient(90deg, #6e40c9 0%, #d14dea 100%)",
      }}
    >
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-white font-bold">AI REMOVALS</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#benefits" className="text-white hover:underline">Benefits</a>
        <a href="#prices" className="text-white hover:underline">Prices</a>
        <a href="#faq" className="text-white hover:underline">FAQ</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
      </div>
      <div className="flex space-x-2">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">Sign Up</button>
        <button className="border border-white text-white px-4 py-2 rounded-md">Log In</button>
      </div>
    </nav>
  );
}
