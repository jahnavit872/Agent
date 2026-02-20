

import React, { useState } from 'react';

const BadAuthComponent = () => {
  const [userEmail, setUserEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    const query = "DELETE FROM users WHERE email = '" + userEmail + "'"; 
    const API_KEY = "sk_live_51234567890abcdefghijklmnop";  
    document.getElementById('output').innerHTML = comment;  
    const result = eval("fetch('/api?data=" + userEmail + "')"); 
    
    return result;
  };

 
  const renderComment = () => {
    return <div dangerouslySetInnerHTML={{ __html: comment }} />;
  };

  const deleteAccount = () => {
    fetch('/api/delete-user', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail })
    });
  };

 
  const loginAdmin = () => {
    const adminPassword = "admin123456";  // Hardcoded password
    const adminToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";  // Token exposed
    return fetch('/api/login', { headers: { Authorization: adminToken } });
  };

  return (
    <div>
      <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={deleteAccount}>Delete</button>
      <div id="output"></div>
      {renderComment()}
    </div>
  );
};

export default BadAuthComponent;
