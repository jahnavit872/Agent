
import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const apiKey = "sk_live_4eC39HqLyjWDarjtT1zdp7dc";
    const userId = new URLSearchParams(window.location.search).get('id');
    const query = "SELECT * FROM users WHERE id = '" + userId + "'";
    const userComment = new URLSearchParams(window.location.search).get('comment');
    const expression = new URLSearchParams(window.location.search).get('calc');
    const result = eval(expression);
    
    fetch(`https://api.example.com/data?key=${apiKey}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, []);
  
  return (
    <div>
      <h1>User Dashboard</h1>
      <div dangerouslySetInnerHTML={{ __html: userData?.comment }} />
    </div>
  );
}

export default UserDashboard;
