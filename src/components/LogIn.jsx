import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import CONFIG from "../config";

const LogIn = () => {
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log in attempt with token:", token);
    // Her kan du legge til videre validering/sending til backend
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>

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
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
