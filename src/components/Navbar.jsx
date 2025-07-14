import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white">
      <a href="https://airemovals.co.uk" className="font-bold text-lg">AI REMOVALS</a>
      <div className="space-x-4 hidden md:flex">
        <a href="#benefits">Benefits</a>
        <a href="#prices">Prices</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <a href="/signup" className="bg-green-600 px-4 py-2 rounded text-white">Sign Up</a>
        <a href="/login" className="border border-white px-4 py-2 rounded">Log In</a>
      </div>
    </nav>
  );
}
