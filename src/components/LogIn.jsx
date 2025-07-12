import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    try {
      // Håndter logikken for innlogging her (f.eks. API-kall)
      // Simulerer en vellykket innlogging
      console.log('User logged in with email:', email);
      alert('Log in successful!');
    } catch (err) {
      setError('Error during log in');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl mb-4">Log In</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
