import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { SITE_KEY } from "../config";

const SignUp = () => {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms.");
      return;
    }
    if (!token) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    // Send signup data (company, email, password, token) to backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mr-2"
            required
          />
          <label className="text-sm">
            I accept the <a href="/terms" className="text-blue-600 hover:underline">Terms</a>
          </label>
        </div>

        <div className="mb-4">
          <Turnstile
            sitekey={SITE_KEY}
            onSuccess={(token) => setToken(token)}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Account
        </button>

        <div className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
