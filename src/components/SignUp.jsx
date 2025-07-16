import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the Terms to register.");
      return;
    }

    if (!captchaToken) {
      alert("Please complete the captcha.");
      return;
    }

    // Eksempel payload
    const payload = {
      email,
      company,
      captchaToken,
    };

    console.log("Submitted:", payload);
    // Her kan du sende payload til backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A0A2A] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161A23] p-8 rounded-md w-full max-w-sm text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700"
          required
        />

        <Turnstile
          siteKey="1382f03e605d2aaf7f19449f049be5c8d2b62"
          onVerify={handleVerify}
          className="mb-4"
        />

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
            className="mr-2"
          />
          <span>
            I agree to the{" "}
            <a href="/terms" className="underline text-blue-400">
              Terms
            </a>
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
