import React from "react";
import { validateLogin } from "../helpers/validateLogin";

function LoginForm({ formData }) {
  const isValid = validateLogin(formData);

  if (!isValid) {
    console.log("Invalid login data");
    return null;
  }

  return <button>Login</button>;
}

export default LoginForm;
