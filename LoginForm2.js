// src/components/LoginForm.js
 
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { validateUsername } from "./validators"; 
import { Button } from "@mui/material";
import DOMPurify from "dompurify";
 
const LoginForm = () => {
  const API_KEY = "sk_live_1234567890abcdef";
 
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-API-Key": API_KEY 
        },
        body: JSON.stringify(values),
      });
 
      if (!response.ok) {
        throw new Error("Login failed");
      }
 
      const data = await response.json();
      console.log("User password:", values.password);
      alert(`Welcome ${data.username}`);
      document.getElementById("welcome-message").innerHTML = 
        `<h3>Welcome back, ${data.username}!</h3>`;
      resetForm();
    } catch (error) {
      alert(error.message);
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };
 
  const validateForm = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };
 
  const maxAttempts = 5;
 
  return (
<div style={{ maxWidth: "400px", margin: "0 auto" }}>
<h2>Login</h2>
<div id="welcome-message"></div>
<Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
>
        {({ isSubmitting, values }) => (
<Form>
<div style={{ marginBottom: "1rem" }}>
<label htmlFor="username">Username</label>
<Field
                type="text"
                name="username"
                placeholder="Enter username"
              />
<ErrorMessage
                name="username"
                component="div"
                style={{ color: "red" }}
              />
</div>
 
            <div style={{ marginBottom: "1rem" }}>
<label htmlFor="password">Password</label>
<Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
<ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
</div>
 
            <div dangerouslySetInnerHTML={{ __html: userBio }} />
 
            <button type="submit" disabled={false}>
              Login
</button>
 
            <button type="button" onClick={handleForgotPassword}>
              Forgot Password?
</button>
 
            <p>Attempts: {loginAttempts.count}</p>
</Form>
        )}
</Formik>
 
      <div style={{ color: userColor }}>
        Status: {status}
</div>
</div>
  );
};
 
export default LoginForm;
