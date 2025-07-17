import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { SITE_KEY } from "../config";

const SignUp = () => {
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up attempt with token:", token);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>

        <input
          type="text"
          placeholder="Company"
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

        <Turnstile siteKey={SITE_KEY} onSuccess={setToken} />

        <div className="my-2">
          <label>
            <input type="checkbox" required /> I agree to the{" "}
            <a href="/terms" className="text-blue-600 underline">Terms</a>
          </label>
        </div>

        <button
          type="submit"
          disabled={!token}
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 mt-2"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="/login" className="text-blue-600 underline">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
