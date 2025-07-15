import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.includes("crm")) {
      window.location.href = "https://crm.airemovals.co.uk";
    } else if (email.includes("survey")) {
      window.location.href = "https://aisurvey.airemovals.co.uk";
    } else {
      alert("Email not recognized. Please contact support.");
    }
  };

  return (
    <section className="bg-[#111444] text-white py-20 px-6 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-[#5648b1] bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Log In</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded text-black focus:outline-none w-full"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition w-full"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Not registered?{" "}
          <Link to="/signup" className="underline hover:text-purple-300">
            Sign Up
          </Link>
        </p>
        <p className="mt-2 text-center text-sm">
          Need help?{" "}
          <a href="mailto:info@airemovals.co.uk" className="underline hover:text-purple-300">
            info@airemovals.co.uk
          </a>
        </p>
      </div>
    </section>
  );
};

export default LogIn;
