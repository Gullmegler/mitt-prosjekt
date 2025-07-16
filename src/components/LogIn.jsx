import React, { useState } from 'react';
import Turnstile from 'react-turnstile';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert('Please complete the verification.');
      return;
    }
    // Send login data + token to server
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0B0B3B]">
      <form onSubmit={handleSubmit} className="bg-[#1E1E2F] p-8 rounded-md w-full max-w-sm">
        <h2 className="text-center text-white text-xl font-semibold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-[#161621] text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-[#161621] text-white"
          required
        />
        <Turnstile
          sitekey="0x4AAAAAAAJfnpYiN-ywFfFb" // <-- Bytt til din API-nøkkel hvis nødvendig
          onVerify={(token) => setToken(token)}
          className="my-2"
        />
        <button
          type="submit"
          className="w-full bg-[#A259FF] text-white py-2 rounded hover:bg-[#8c3fe0]"
        >
          Log In
        </button>
        <div className="flex justify-between mt-2 text-sm text-white">
          <Link to="/reset">Forgot Password?</Link>
          <Link to="/signup">Not registered?</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
