import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Turnstile from "@marsidev/react-turnstile";
import { Link } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const prefillEmail = params.get("email") || "";

  const [email, setEmail] = useState(prefillEmail);
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please complete the Turnstile verification.");
      return;
    }

    if (!agreed) {
      alert("You must agree to the terms.");
      return;
    }

    // Send til backend, inkl token for verifisering
    console.log({ email, company, fullName, password, token });

    // Eksempel: await axios.post("/api/signup", { email, company, fullName, password, token })
  };

  return (
    <section className="bg-[#0e0f11] text-white py-20 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1f24] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          required
        />

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mr-2"
            required
          />
          <label>
            I agree to the{" "}
            <Link to="/terms" className="underline text-purple-400">
              Terms of Service
            </Link>
          </label>
        </div>

        <Turnstile
          siteKey="0x4AAAAAAB1Vg7CV1SLjRqr6"
          onSuccess={(token) => setToken(token)}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-bold"
        >
          Create Account
        </button>
      </form>
    </section>
  );
};

export default SignUp;
