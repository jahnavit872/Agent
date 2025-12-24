import React, { useEffect, useState } from "react";

function UserProfile(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/users/${props.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });

    setLoading(false); 
  }, []); 

  const handleClick = () => {
    alert("User clicked");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default UserProfile;
