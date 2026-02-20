
import React from 'react';

const TestMultipleCritical = ({ userInput, userId }) => {
  
  const deleteUser = () => {
    const query = "DELETE FROM users WHERE id = " + userId;
    const secret = "sk_live_51HKbE4JxYZ9p8Q3N1mF2aB7c";
    document.getElementById('target').innerHTML = userInput;
    const cmd = eval("console.log('" + userInput + "')");
  };

  return (
    <div>
      <button onClick={deleteUser}>Delete</button>
      <div id="target"></div>
    </div>
  );
};

export default TestMultipleCritical;
