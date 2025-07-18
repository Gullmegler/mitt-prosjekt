import React, { useState } from "react";
import axios from "axios";
import Turnstile from "react-turnstile";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email,
        "cf-turnstile-response": token,
      });

      alert("Login successful!");
      setEmail("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Turnstile
          sitekey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onVerify={(token) => setToken(token)}
        />

        <button
          type="submit"
          disabled={!token}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
