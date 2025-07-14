import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-githubBlue text-white flex justify-between items-center px-6 py-4">
      <div className="font-bold text-lg">AI REMOVALS</div>
      <div className="space-x-6 hidden md:flex">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#prices" className="hover:underline">Prices</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button className="bg-orange text-white px-4 py-1 rounded">Sign Up</button>
        <button className="border border-white px-4 py-1 rounded">Log In</button>
      </div>
    </nav>
  );
}
