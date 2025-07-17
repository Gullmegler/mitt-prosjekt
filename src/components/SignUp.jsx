import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, token }),
      }
    );

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Turnstile
          siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onSuccess={setToken}
          className="mb-3"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded"
        >
