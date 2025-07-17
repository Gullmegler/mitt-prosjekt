import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import CONFIG from "../config.js";

const SignUp = () => {
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with token:", token);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />

        <Turnstile
          siteKey={CONFIG.TURNSTILE_SITE_KEY}
          onSuccess={(token) => setToken(token)}
        />

        <button
          type="submit"
          disabled={!token}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 mt-3"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
