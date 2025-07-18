import React, { useState } from "react";
import Turnstile from "react-turnstile";

const LogIn = () => {
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <Turnstile
          sitekey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onVerify={setToken}
          className="mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={!token}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
