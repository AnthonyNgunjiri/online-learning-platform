
import CourseDash from "./CourseDash";
import tutor from "../assets/col3.jpg";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { api_secret } from "../utility/config";
import { CourseContext } from "./CourseContext";
import "./dash.css";

const levels = ["Postgraduate","masters", "bachelor" ];

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { profileData, setProfileData } = useContext(CourseContext);
  const navigate = useNavigate();
  const cloudName = "ddsgll0wa";
  const preset = "beulah";

  const handleUpload = async () => {
    if (!profileData.image) return;

    const payload = new FormData();
    payload.append("file", profileData.image);
    payload.append("upload_preset", preset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        payload
      );
      setProfileData((prevData) => ({
        ...prevData,
        imageurl: response.data.secure_url,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (formValues) => {
    if (!profileData.imageurl) {
      setError("Please upload an image first.");
      return;
    }

    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${api_secret}/api/tutors/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          avatarurl: profileData.imageurl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        setError(errorData);
        return;
      }

      const data = await response.json();
      if (data.success) {
        navigate("/course");
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title:"",
      FirstName: "",
      LastName:"",
      level: "",
      bio: ""


    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      FirstName: Yup.string().required("Required"),
      LastName: Yup.string().required("Required"),
      level: Yup.string().required("Please select a level"),
      bio: Yup.string().required("Required"),

    }),
    onSubmit: (values) => {
      setProfileData((prevData) => ({
        ...prevData,
        title:values.title,
        FirstName: values.FirstName,
        LastName: values.LastName,
        level:values.level,
        bio: values.bio,
      }));
      handleSubmit(values);
    },
  });
  return (
    <div>
      <section className="basic">

       <section className="basics">
       <h2 className="head">apply as instructor</h2>
        <p>Lorem ipsum dolor sit amet.</p>

        <hr />
        <hr />
        <p id="par">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto aspernatur modi illum, suscipit accusantium earum tempora molestias neque commodi eveniet maxime adipisci necessitatibus aliquam, quam quos magni et quasi.</p>
       </section>
      <hr />
      <hr />
<h2 className="head">meet out team</h2>
        <img src={tutor} alt="" id="pari" />
        <div className="basics">
        <h2 className="head">how to become a tutor</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <hr />
        <hr />

        <section className="wrap">
      <div className="main">
        <div className="head">
          <h1>Register to Become a Tutor</h1>
        </div>
        <hr />
        <hr />
        <form onSubmit={formik.handleSubmit}>
        <div className="mult">
            <div className="lab">
              <button className="btn" onClick={handleUpload} type="button">
                Upload Image
              </button>

              <input
                name="image"
                type="file"
                id="image"
                onChange={(e) =>
                  setProfileData((prevData) => ({
                    ...prevData,
                    image: e.target.files[0],
                  }))
                }
              />
            </div>
            <div className="lab">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null}
            </div>
          </div>
          <div className="multi">
            <div className="lab">
              <label htmlFor="firstname">FirstName</label>
              <input
                id="firstname"
                type="text"
                {...formik.getFieldProps("FirstName")}
              />
              {formik.touched.FirstName && formik.errors ? (
                <div>{formik.errors.FirstName}</div>
              ) : null}
            </div>
            <div className="lab">
              <label htmlFor="lastname">LastName</label>
              <input
                id="lastname"
                type="text"
                {...formik.getFieldProps("LastName")}
              />
              {formik.touched.LastName && formik.errors.LastName ? (
                <div>{formik.errors.LastName}</div>
              ) : null}
            </div>
            </div>
            <div className="lab">
              <label htmlFor="level">Level</label>
              <select id="level" {...formik.getFieldProps("level")}>
                <option value="" label="Select level" />
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              {formik.touched.level && formik.errors.level ? (
                <div>{formik.errors.level}</div>
              ) : null}
            </div>
          

          <div className="lab">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              {...formik.getFieldProps("bio")}
            />
            {formik.touched.bio && formik.errors.bio ? (
              <div>{formik.errors.bio}</div>
            ) : null}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Become a Tutor"}
          </button>
          <div className="log-form">
            <p>
              Would you like to add a course?
              <Link to="/course">add here</Link>
            </p>
            <p>{error && error}</p>
          </div>
        </form>
        <hr />
      </div>
    </section>
      </section>
      <section className="core">
      <CourseDash />
      </section>
     
    </div>
  );
};

export default Dashboard;
