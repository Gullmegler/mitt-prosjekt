import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const SignUp = () => {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du legge til din logikk for å sende data til backend
    console.log("Company:", company);
    console.log("Email:", email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0A0A2F]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161B22] p-8 rounded-md w-full max-w-md shadow-md"
      >
        <h2 className="text-center text-white text-xl mb-6 font-bold">Sign Up</h2>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-[#0D1117] text-white"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-[#0D1117] text-white"
          required
        />

        <div className="mb-3">
          <Turnstile
            siteKey="0x4AAAAAAB1Vg7CV1SLjRqr6" // ← sett inn din egen siteKey
            options={{ theme: "light" }}
          />
        </div>

        <label className="flex items-center text-sm text-gray-300 mb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="mr-2"
            required
          />
          I agree to the <a href="/terms" className="underline ml-1">Terms</a>
        </label>
        <button
          type="submit"
          className="w-full bg-[#A259FF] text-white py-2 rounded font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
