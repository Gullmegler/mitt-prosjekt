import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#111444] px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <span className="font-bold text-white">AI Removals</span>
      </div>
      <div className="flex gap-6 text-white">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#prices" className="hover:underline">Prices</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">Sign Up</button>
        <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black">Log In</button>
      </div>
    </nav>
  );
};

export default NavBar;
