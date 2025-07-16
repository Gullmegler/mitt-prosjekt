import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert('Please verify the CAPTCHA.');
      return;
    }
    console.log({ email, password, token });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A0A2A]">
      <form onSubmit={handleSubmit} className="bg-[#1A1A2E] p-8 rounded-lg w-full max-w-sm text-white">
        <h2 className="text-center text-2xl mb-4">Log In</h2>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
          required
        />

        <div className="my-4">
          <Turnstile
            siteKey="0x4AAAAAAAB6l1U0g9YcGIRw"
            onSuccess={(token) => setToken(token)}
          />
        </div>

        <button type="submit" className="bg-[#A855F7] w-full py-2 rounded">
          Log In
        </button>

        <div className="flex justify-between text-sm mt-4">
          <a href="/forgot" className="underline">Forgot Password?</a>
          <a href="/signup" className="underline">Not registered?</a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
