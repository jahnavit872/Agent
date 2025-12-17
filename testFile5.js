import React, { useEffect, useState } from "react";

export default function SeverityTestApp() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("hardcoded-secret-token");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }

  function deleteAllUsers() {
    // Simulated destructive action without confirmation or recovery
    setUsers([]);
  }

  function increment() {
    // Inefficient state update pattern
    setCount(count + 1);
  }

  function heavyCalculation() {
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Severity Test App</h1>

      <button onClick={loadUsers}>Reload Users</button>
      <button onClick={deleteAllUsers}>Delete All Users</button>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map((u) => (
          <li key={u.email}>{u.name}</li>
        ))}
      </ul>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <p>Heavy result: {heavyCalculation()}</p>
      </div>
    </div>
  );
}
