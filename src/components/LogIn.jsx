import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the verification.");
      return;
    }
    // Your login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B0C2A]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1A1B2E] p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-center text-white text-2xl font-bold mb-6">Log In</h2>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />

        <Turnstile
          siteKey="0x4AAAAAAAABBBAAAABBBCCCC" 
          onSuccess={(token) => setToken(token)}
          className="my-4"
        />

        <button
          type="submit"
          className="w-full bg-[#A259FF] text-white p-2 rounded"
        >
          Log In
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-300">
          <Link to="/forgot-password" className="underline">Forgot Password?</Link>
          <Link to="/signup" className="underline">Not registered?</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
