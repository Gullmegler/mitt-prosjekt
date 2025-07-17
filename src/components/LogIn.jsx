import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, token }),
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
        <h2 className="text-xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Turnstile
          siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onSuccess={setToken}
          className="mb-3"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
