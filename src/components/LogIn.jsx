import React, { useState } from 'react';
import Turnstile from 'react-turnstile';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [captchaValid, setCaptchaValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert('Please complete CAPTCHA');
      return;
    }

    // TODO: Legg til faktisk autentisering her
    console.log('Logging in with:', form);
    navigate('/users');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log in to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />

          <Turnstile
            sitekey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
            onSuccess={() => setCaptchaValid(true)}
            onExpire={() => setCaptchaValid(false)}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>
        <div className="text-center text-sm mt-4">
          <a href="/signup" className="text-blue-600 hover:underline">Not registered? Sign up here</a><br />
          <a href="/reset-password" className="text-gray-600 hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
