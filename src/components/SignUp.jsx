import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Turnstile from "react-turnstile";

const SignUp = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree || !turnstileToken) {
      alert("Please agree to the terms and complete verification");
      return;
    }

    // Her legger du til backend-kall for å lagre bruker
    console.log("Company:", company);
    console.log("Email:", email);
    console.log("Turnstile token:", turnstileToken);

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-[#181A20] p-8 rounded-md shadow-md w-full max-w-sm"
      >
        <h2 className="text-white text-xl font-bold mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <div className="mb-4">
          <Turnstile
            sitekey="0x4AAAAAAAPv93MiM9HrYBzC" // <-- bruk din egen nøkkel
            onVerify={(token) => setTurnstileToken(token)}
          />
        </div>
        <label className="flex items-center mb-4 text-white">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mr-2"
          />
          I agree to the <a href="/terms" className="underline ml-1">Terms</a>
        </label>
        <button
          type="submit"
          className="w-full bg-[#A855F7] text-white py-2 rounded hover:bg-purple-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
