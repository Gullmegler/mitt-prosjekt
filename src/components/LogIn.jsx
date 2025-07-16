import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Link } from "react-router-dom";

const SITE_KEY = "0x4AAAAAABlVg7CV1SLjRqr6";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }
    // Add login logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111144]">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-center text-xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />

        <Turnstile
          sitekey
