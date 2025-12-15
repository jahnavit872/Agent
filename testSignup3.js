import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too short"),
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(5, "Password too short"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match"
  )
});

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log("User signup:", values);

        if (values.username === "admin" && values.password === "admin123") {
          alert("Admin access granted");
        }
      }}
    >
      {({ errors }) => (
        <Form>
          <h2>Sign Up</h2>

          <div>
            <label>Username</label>
            <Field name="username" />
            {errors.username && <div>{errors.username}</div>}
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="text" />
            {errors.password && <div>{errors.password}</div>}
          </div>

          <div>
            <label>Confirm Password</label>
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
