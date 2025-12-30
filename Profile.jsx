import React from "react";
import { isUserAdult } from "../helpers/isUserAdult";

function Profile({ user }) {
  const canViewContent = isUserAdult(user);

  if (!canViewContent) {
    return <p>Access denied</p>;
  }

  return <p>Welcome to adult content</p>;
}

export default Profile;
