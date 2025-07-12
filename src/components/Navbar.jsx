import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCrmLogin, setIsCrmLogin] = useState(false); // For å vise feltene når knappene trykkes
  const [isSurveyLogin, setIsSurveyLogin] = useState(false); // For å vise feltene for AI Survey login

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
    <nav className="bg-orange-500 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <img src="/logo.png" alt="AI Removals Logo" className="h-10" />
      </div>

      {!user ? (
        <div className="flex items-center space-x-6">
          <button
            onClick={() => { setIsCrmLogin(true); setIsSurveyLogin(false); }}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Sign In (CRM)
          </button>
          <button
            onClick={() => { setIsSurveyLogin(true); setIsCrmLogin(false); }}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Sign In (Survey)
          </button>

          {/* Vis kun feltene når knappen trykkes */}
          {(isCrmLogin || isSurveyLogin) && (
            <form
              onSubmit={(e) => handleLogin(e, isCrmLogin ? "crm" : "aisurvey")}
              className="flex items-center space-x-3 mt-4"
            >
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
                className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Logging in..." : isCrmLogin ? "CRM Login" : "AI Survey Login"}
              </button>
            </form>
          )}

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
