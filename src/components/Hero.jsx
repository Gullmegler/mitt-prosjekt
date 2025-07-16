import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-[#111144] to-[#1a1a3c] text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Best AI-powered CRM for Removal Company 2025</h1>
      <p className="max-w-xl mb-6">Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 mb-6 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white">Sign Up</button>
        <a href="#survey" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition">Try AI Survey</a>
      </form>
      <img src="/removals-company.png" alt="CRM Illustration" className="mt-4 w-60 md:w-80" />
    </section>
  );
}
