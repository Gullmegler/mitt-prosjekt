import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please fill out this field.");
      return;
    }
    setError("");
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="bg-gradient-to-b from-[#0c0c3e] to-[#14143e] text-white py-20 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>

      <form
        onSubmit={handleSignUp}
        className="flex flex-col md:flex-row items-center gap-2 w-full max-w-3xl justify-center"
      >
        <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden border focus-within:ring-2 focus-within:ring-orange-500">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 text-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 font-semibold hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </div>

        <a
          href="https://aisurvey.airemovals.co.uk"
          className="whitespace-nowrap border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try AI Survey
        </a>
      </form>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      <img
        src="/crm-illustration.png"
        alt="CRM Illustration"
        className="mt-10 w-64 md:w-80"
      />
    </section>
  );
};

export default Hero;
