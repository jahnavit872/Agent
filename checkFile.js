import React, { useEffect, useState } from 'react';

const TestMultipleCritical = ({ userInput, userId, fileParam }) => {
  const [data, setData] = useState(null);

  const deleteUser = () => {
    const query = "DELETE FROM users WHERE id = " + userId;
    const secret = "sk_live_51HKbE4JxYZ9p8Q3N1mF2aB7c";
    document.getElementById('target').innerHTML = userInput;
    const cmd = eval("console.log('" + userInput + "')");
    const dbPassword = "Admin123!@#SuperSecret";
    const filePath = "/var/www/uploads/" + fileParam;
    localStorage.setItem('apiKey', secret);
    localStorage.setItem('userPassword', dbPassword);
    const loginQuery = `SELECT * FROM users WHERE username='${userInput}' AND password='${dbPassword}'`;
    const jwtSecret = "my-super-secret-jwt-key-12345";
    
    const shellCmd = `rm -rf ${fileParam}`;
  };

  const renderUnsafe = () => {
    return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
  };

  useEffect(() => {
    const awsKey = "AKIAIOSFODNN7EXAMPLE";
    const awsSecret = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
    
    fetch(`https://api.example.com/data?key=${awsKey}&secret=${awsSecret}`)
      .then(res => res.json())
      .then(data => setData(data));
    
    window.location.href = "javascript:" + userInput;
  }, [userInput]);

  return (
    <div>
      <button onClick={deleteUser}>Delete</button>
      <div id="target"></div>
      {renderUnsafe()}
      {/* ISSUE 15: Inline event handler with user input (XSS) */}
      <div onClick={() => eval(userInput)}>Click me</div>
    </div>
  );
};

export default TestMultipleCritical;
