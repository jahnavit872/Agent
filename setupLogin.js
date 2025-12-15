import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email"),
    

  password: Yup.string()
    .min(4, "Password too short")
    
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
       
        console.log("Login attempt:", values);

      
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
          
            {errors.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="text" />
          
            {errors.password && <div>{errors.password}</div>}
          </div>

         
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
}
