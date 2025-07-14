import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  const handleSurvey = () => {
    navigate("/survey");
  };

  return (
    <section className="bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white py-20 text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI-powered CRM for Removal Company 2025
        </h1>
        <p className="text-lg mb-6 max-w-xl">
          Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded w-64 text-black"
          />
          <button
            onClick={handleSignUp}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Sign Up
          </button>
          <button
            onClick={handleSurvey}
            className="border border-white px-6 py-2 rounded"
          >
            Try AI Survey
          </button>
        </div>
        <img
          src="/removals-company.png"
          alt="Removals Company"
          className="mt-10 w-full max-w-md"
        />
      </div>
    </section>
  );
}
