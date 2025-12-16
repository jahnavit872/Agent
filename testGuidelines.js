import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  });

  const increment = () => {
    setCount(count += 1);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: "blue", fontSize: "24px" }}>PR Agent Test App</h1>

      <button onClick={increment}>+</button>
      <p>Count: {count}</p>

      <input
        placeholder="Search users"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: user.name
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
