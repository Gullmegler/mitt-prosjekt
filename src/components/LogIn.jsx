import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { SITE_KEY } from "../config";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }
    // Login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Turnstile
        sitekey={SITE_KEY}
        onSuccess={(token) => setToken(token)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
