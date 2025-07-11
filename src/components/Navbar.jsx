import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sjekk om bruker er logget inn ved oppstart
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Hvis token finnes, sett bruker
      setUser({ email: localStorage.getItem("userEmail") || "LoggedInUser" });
    }
  }, []);

  const handleLogin = async (e, type) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let response;
      if (type === "crm") {
        response = await axios.post("/api/auth/crm-login", { email, password });
      } else if (type === "aisurvey") {
        response = await axios.post("/api/auth/aisurvey-login", { email, password });
      }
      
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", user.email);
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setUser(null);
  };

  return (
    <nav className="bg-orange-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>

      {!user ? (
        <div className="flex items-center space-x-6">
          <form onSubmit={(e) => handleLogin(e, "crm")} className="flex items-center space-x-3">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-1 rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              className="px-2 py-1 rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-black px-4 py-1 rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "CRM Login"}
            </button>
          </form>

          <form onSubmit={(e) => handleLogin(e, "aisurvey")} className="flex items-center space-x-3">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-1 rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              className="px-2 py-1 rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-black px-4 py-1 rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "AI Survey Login"}
            </button>
          </form>
          {error && <div className="text-red-500 ml-4">{error}</div>}
        </div>
      ) : (
        <div className="flex items-center space-x-6">
          <a href="/crm" className="hover:text-gray-400">
            CRM Dashboard
          </a>
          <a href="/ai-survey" className="hover:text-gray-400">
            AI Survey
          </a>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
          <span className="text-gray-300">Hello, {user.email}</span>
        </div>
      )}
    </nav>
  );
}
