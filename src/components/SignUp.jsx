import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

const SignUp = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.termsAccepted) {
      return setError("You must accept the terms.");
    }

    if (!captchaToken) {
      return setError("Please complete the captcha.");
    }

    try {
      const response = await axios.post("/api/signup", {
        ...formData,
        captchaToken,
      });

      if (response.data.success) {
        navigate("/login");
      } else {
        setError(response.data.message || "Signup failed.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-4 h-4"
              required
            />
            <label>
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms
              </a>
            </label>
          </div>

          <Turnstile
            sitekey={SITE_KEY}
            onSuccess={(token) => setCaptchaToken(token)}
          />

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
