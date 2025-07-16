import React, { useState } from 'react';
import { Turnstile } from 'react-turnstile';

const SignUp = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('You must agree to the terms.');
      return;
    }
    if (!token) {
      alert('Please verify the CAPTCHA.');
      return;
    }
    console.log({ company, email, name, phone, password, token });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A0A2A]">
      <form onSubmit={handleSubmit} className="bg-[#1A1A2E] p-8 rounded-lg w-full max-w-sm text-white">
        <h2 className="text-center text-2xl mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
          required
        />
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
          required
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
          required
        />

        <div className="my-2">
          <Turnstile
            sitekey="0x4AAAAAAAB6l1U0g9YcGIRw"
            onVerify={(token) => setToken(token)}
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mr-2"
          />
          <label>
            I agree to the <a href="/terms" className="underline">Terms</a>
          </label>
        </div>

        <button type="submit" className="bg-[#A855F7] w-full py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
