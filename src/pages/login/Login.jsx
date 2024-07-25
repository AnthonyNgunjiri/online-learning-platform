import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/Authentication/AuthContext.jsx";
import { api_secret } from "../../utility/config";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (formValues) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${api_secret}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();

      if (data.success === true) {
        login(data.role);
        if (data.role === "ADMIN") {
          console.log('Navigating to admin dashboard');
          navigate("/admin-dashboard");
        } else if (data.role === "TUTOR") {
          console.log('Navigating to tutor dashboard');
          navigate("/tutor-dashboard");
        } else {
          console.log('Navigating to home');
          navigate("/home");
        }
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className="main">
      <div className="head">
        <h1>Visit us today</h1>
      </div>
      <hr />
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="multi">
          <div className="lab">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              type="email"
              {...formik.getFieldProps("emailAddress")}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
              <div>{formik.errors.emailAddress}</div>
            ) : null}
          </div>
          <div className="lab">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Visit Us"}
        </button>
        <div className="log-form">
          <p>
            Don't have an account? <Link to="/Signup">Sign up here</Link>
          </p>
          <p>{error && error}</p>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default Login;
