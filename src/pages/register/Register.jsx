import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { api_secret } from "../../utility/config";
import "./register.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    console.log(formValues.role); // Check selected role
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${api_secret}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();

      if (data.success === true) {
        navigate("/login");
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
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: "STUDENT", // Default role
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      phoneNumber: Yup.number()
        .typeError("Must be a valid phone number")
        .max(999999999999, "Must be 12 digits or less")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      role: Yup.string()
        .oneOf(["ADMIN", "TUTOR", "STUDENT"], "Invalid role")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className="main">
      <div className="head">
        <h1>Sign up today</h1>
      </div>
      <hr />
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="multi">
          <div className="lab">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="lab">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="text"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
        </div>
        <div className="multi">
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
          <div className="lab">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        </div>
        <div className="lab">
          <label htmlFor="role">Role</label>
          <select id="role" {...formik.getFieldProps("role")}>
            <option value="STUDENT">Student</option>
            <option value="TUTOR">Tutor</option>
            <option value="ADMIN">Admin</option>
          </select>
          {formik.touched.role && formik.errors.role ? (
            <div>{formik.errors.role}</div>
          ) : null}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Create Account"}
        </button>
        <div className="log-form">
          <p>
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
          <p>{error && error}</p>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default Register;
