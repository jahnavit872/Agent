import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

        setLoading(true);
    setError("");

        fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Login failed");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Logged in user", data);
        setLoading(false);
      })
      .catch((err) => {
                setError(err.message);
      });
  }

  return (
    <div style={{ width: 300, margin: "40px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"             value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

                <button style={{ marginTop: 20 }} type="submit">
          Login
        </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
