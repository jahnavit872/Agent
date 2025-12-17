// src/components/LoginForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const LoginForm = () => {
// With proper error handling
const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    await fetchData(); // Call the fetchData function here
    // existing login logic
  } catch (error) {
    console.error('Fetch data failed:', error);
    alert('Fetch data failed. Please try again.');
  }
};
  await fetchData(); // Call the fetchData function here
  // existing login logic
};
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    console.error('Operation failed:', error);
    throw error;  // Re-throw or handle appropriately
  }
}
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      alert(`Welcome ${data.username}`);
      resetForm();
    } catch (error) {
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
<div className="login-form">
  <h2>Login</h2>
  ...
</div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
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

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
    
    </div>
  );
};

export default LoginForm;
