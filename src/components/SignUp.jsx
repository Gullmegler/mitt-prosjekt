import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [role, setRole] = useState('CRM');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passordene stemmer ikke overens.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/auth/signup', {
        email,
        password,
        companyName,
        website,
        phone,
        role
      });

      console.log(response.data);
      setLoading(false);
      // Redirect to login or CRM
    } catch (err) {
      setError(err.response?.data?.message || 'Noe gikk galt, prøv igjen.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-post"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Passord"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Bekreft passord"
            className="w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <PhoneInput
            country={'no'}
            value={phone}
            onChange={setPhone}
            placeholder="Telefonnummer"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Firma"
            className="w-full p-2 border border-gray-300 rounded"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Hjemmeside"
            className="w-full p-2 border border-gray-300 rounded"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="mr-2">Velg rolle:</label>
          <select
            className="p-2 border border-gray-300 rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="CRM">CRM</option>
            <option value="AI Survey">AI Survey</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? 'Vennligst vent...' : 'Registrer deg'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>Er du allerede bruker? <a href="/login" className="text-blue-500">Logg inn</a></p>
      </div>
    </div>
  );
};

export default SignUp;
