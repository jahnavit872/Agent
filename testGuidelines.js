import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email"),
    // ❌ missing `.required()`

  password: Yup.string()
    .min(4, "Password too short")
    // ❌ too weak password rules
});

export default function Login() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // ❌ SECURITY ISSUE: logging credentials
        console.log("Login attempt:", values);

        // ❌ Hardcoded credentials
        if (
          values.email === "admin@example.com" &&
          values.password === "admin123"
        ) {
          alert("Logged in!");
        } else {
          alert("Invalid credentials");
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            {/* ❌ Errors shown even when not touched */}
            {errors.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="text" />
            {/* ❌ Password field should not be text */}
            {errors.password && <div>{errors.password}</div>}
          </div>

          {/* ❌ No disabled state while submitting */}
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
}
