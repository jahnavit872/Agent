import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log("Login values:", values);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
