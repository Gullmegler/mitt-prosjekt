import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Bekreft at du ikke er en robot.");
      return;
    }

    try {
      const res = await axios.post("/api/login", {
        username,
        password,
        "cf-turnstile-response": token,
      });

      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login-feil:", error);
      alert("Feil brukernavn/passord eller Turnstile-token.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Logg inn</h2>

        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />

        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />

        <Turnstile
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onSuccess={(token) => setToken(token)}
          className="rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Logg inn
        </button>
      </form>
    </div>
  );
};

export default LogIn;
