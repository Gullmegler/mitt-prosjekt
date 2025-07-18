import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Håndter login-logikk her
    console.log('Logging in med:', email, token);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Logg inn</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">E-post</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Token</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!token}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Logg inn
        </button>
      </form>
    </div>
  );
};

export default LogIn;
