import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../operations/operationsLogin";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
        <h2 className="text-xl font-bold text-blue-700 mb-6 text-center">
          Login to Admin
        </h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.name) {
              errors.name = "Name is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await login(values);
              navigate("/admin/blogs"); 
            } catch (err) {
              console.error(err);
              setErrors({ email: "Invalid credentials" });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <Field
                  type="name"
                  name="name"
                  placeholder="Name *"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Hasło *"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
              >
                {isSubmitting ? "Logging in..." : "Zaloguj się"}
              </button>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
                onClick={() => navigate("/")}
              >
                Powrót na stronę główną
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
