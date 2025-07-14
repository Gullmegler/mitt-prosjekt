import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSignupRedirect = () => {
    if (email) {
      window.location.href = `/signup?email=${encodeURIComponent(email)}`;
    } else {
      window.location.href = "/signup";
    }
  };

  return (
    <section className="bg-[#0d1117] text-white text-center px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded w-full md:w-80 text-black"
        />
        <button
          onClick={handleSignupRedirect}
          className="bg-green-600 px-6 py-3 rounded text-white font-semibold"
        >
          Sign Up
        </button>
        <a
          href="#aisurvey"
          className="border border-white px-6 py-3 rounded text-white font-semibold text-center"
        >
          Try AI Survey
        </a>
      </div>
      <img
        src="/survey-agent.png"
        alt="Survey agent"
        className="mx-auto mt-10 w-full max-w-md"
      />
    </section>
  );
}
