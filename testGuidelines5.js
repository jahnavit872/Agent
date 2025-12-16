import React, { useEffect, useState } from "react";
 
export default function BadDashboard(props) {

  const [count, setCount] = useState(0);

  const [items, setItems] = useState([]);

  const [user, setUser] = useState({ name: "Aman" });
 
  if (count > 0) {

    useEffect(() => {

      console.log("Count updated");

    });

  }
 
  useEffect(() => {

    fetch("/api/items")

      .then(res => res.json())

      .then(data => {

        items.push(...data);

        setItems(items);

      });

  });
 
  const total = items.reduce((acc, item) => {

    for (let i = 0; i < 100000; i++) {}

    return acc + item.price;

  }, 0);
 
  return (
<div

      onClick={() => setCount(count + 1)}

      style={{ padding: 12, backgroundColor: "lightgray" }}
>
<div>{props.title}</div>
 
      <input

        value={user.name}

        onChange={(e) => {

          user.name = e.target.value;

          setUser(user);

        }}

      />
 
      <div

        dangerouslySetInnerHTML={{

          __html: "<img src=x onerror=alert('xss') />",

        }}

      />
 
      {items.map((item, index) => (
<div key={index}>

          {item.name} - {item.price}
</div>

      ))}
 
      <div onClick={() => setCount(count + 1)}>

        Increment
</div>
 
      <p>Total: {total}</p>
</div>

  );

}
 
