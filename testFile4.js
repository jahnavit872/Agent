import React, { useEffect, useState } from "react";

export default function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
       
        setError(err.message);
      });
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function filteredUsers() {
    return users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>User Dashboard</h1>

      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={handleSearchChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {filteredUsers().map((user) => (
          // Key is index instead of stable id
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>

      <button onClick={loadUsers}>Reload Users</button>
    </div>
  );
}
