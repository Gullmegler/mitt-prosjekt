import React, { useState } from 'react';
import Turnstile from 'react-turnstile';

const SignUp = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert('Please complete the verification.');
      return;
    }
    // Send signup data + token to server
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0B0B3B]">
      <form onSubmit={handleSubmit} className="bg-[#1E1E2F] p-8 rounded-md w-full max-w-sm">
        <h2 className="text-center text-white text-xl font-semibold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-[#161621] text-white"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-[#161621] text-white"
          required
        />
        <Turnstile
          sitekey="0x4AAAAAAAJfnpYiN-ywFfFb" // <-- Bytt til din API-nøkkel hvis nødvendig
          onVerify={(token) => setToken(token)}
          className="my-2"
        />
        <label className="flex items-center text-white text-sm mb-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mr-2"
            required
          />
          I agree to the <a href="/terms" className="underline">Terms</a>
        </label>
        <button
          type="submit"
          className="w-full bg-[#A259FF] text-white py-2 rounded hover:bg-[#8c3fe0]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
