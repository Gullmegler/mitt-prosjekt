import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import removalsImage from "/public/removals-company.png";

export default function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg mb-6">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded w-full md:w-72 text-black"
          required
        />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded text-white">
          Sign Up
        </button>
        <a href="#survey" className="border border-white px-4 py-2 rounded text-white">
          Try AI Survey
        </a>
      </form>
      <img src={removalsImage} alt="Removals Company" className="mx-auto mt-8 max-h-96 object-contain" />
    </section>
  );
}
