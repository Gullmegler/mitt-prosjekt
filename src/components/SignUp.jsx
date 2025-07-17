import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const SignUp = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send data til backend
    console.log({ company, email, password, agreed });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the <a href="/terms" className="underline text-indigo-600">Terms</a>
          </label>
        </div>

        <Turnstile
          siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onSuccess={(token) => console.log('Turnstile success:', token)}
          className="mx-auto"
        />

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          Create Account
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 underline">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
