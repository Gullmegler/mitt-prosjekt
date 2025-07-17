import React, { useState } from 'react';
import Turnstile from 'react-turnstile';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ company: '', email: '', password: '', terms: false });
  const [captchaValid, setCaptchaValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert('Please complete CAPTCHA');
      return;
    }
    if (!form.terms) {
      alert('Please accept the terms');
      return;
    }

    // TODO: Add API call to submit the form
    console.log('Form submitted:', form);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-500"
            required
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="h-4 w-4 text-pink-600"
            />
            <label className="text-sm text-gray-600">
              I agree to the <a href="/terms" className="underline">Terms</a>
            </label>
          </div>

          <Turnstile
            sitekey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
            onSuccess={() => setCaptchaValid(true)}
            onExpire={() => setCaptchaValid(false)}
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already registered? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
