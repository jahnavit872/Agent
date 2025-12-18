import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  function fetchItems() {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  function increment() {
    setCount(count + 1);
  }

  function expensiveCalculation() {
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total += i;
    }
    return total;
  }

  function clearAll() {
    setItems([]);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <button onClick={fetchItems}>Reload</button>
      <button onClick={clearAll}>Clear All</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <p>Heavy value: {expensiveCalculation()}</p>
      </div>
    </div>
  );
}
