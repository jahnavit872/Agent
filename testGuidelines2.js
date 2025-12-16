import React, { useState, useEffect } from "react";

export default function PrAgentTest(props) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result => {
        data.push(...result);
        setData(data);
      });
  });

  useEffect(() => {
    const temp = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(temp);
  }, [query]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        margin: "10px"
      }}
      onClick={() => console.log("container clicked")}
    >
      <div>
        <div>
          <h2>PR Agent Test</h2>
        </div>
      </div>

      <button onClick={increment}>Increment</button>
      <span>{count}</span>

      <input
        placeholder="Search"
        onChange={e => setQuery(e.target.value)}
      />

      <div>
        {filteredData.map((item, index) => {
          return (
            <div key={index}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: item.title
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
