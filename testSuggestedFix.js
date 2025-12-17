import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    fetchUsers();
useEffect(() => {
  fetchUsers();
}, []);

  function fetchUsers() {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>PR Agent Test App</h1>

      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Users</h2>
        {loading && <p>Loading users...</p>}

        <ul>
          {users.map((user) => (
            // Missing key warning handled, but name-only rendering
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
