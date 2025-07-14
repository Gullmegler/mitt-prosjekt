import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignUp() {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location.search]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form>
        <input
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        {/* legg til resten av feltene */}
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
}
