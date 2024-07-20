import React, { useState, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { api_secret } from "../utility/config";
import { CourseContext } from "./CourseContext";
import "./dash.css";

const CourseDash = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { courseData, setCourseData } = useContext(CourseContext);
  const navigate = useNavigate();
  const cloudName = "ddsgll0wa";
  const preset = "beulah";

  const handleUpload = async () => {
    if (!courseData.image) return;

    const payload = new FormData();
    payload.append("file", courseData.image);
    payload.append("upload_preset", preset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        payload
      );
      setCourseData((prevData) => ({
        ...prevData,
        imageurl: response.data.secure_url,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (formValues) => {
    if (!courseData.imageurl) {
      setError("Please upload an image first.");
      return;
    }

    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${api_secret}/api/courses/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          avatarurl: courseData.imageurl,
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
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setCourseData((prevData) => ({
        ...prevData,
        title: values.title,
        description: values.description,
      }));
      handleSubmit(values);
    },
  });

  return (
    <section className="wrap">
      <div className="main">
        <div className="head">
          <h1>Add Course</h1>
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
                  setCourseData((prevData) => ({
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

          <div className="lab">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Add Course"}
          </button>
          <div className="log-form">
            <p>
              Would you like to explore our courses?
              <Link to="/course">Explore here</Link>
            </p>
            <p>{error && error}</p>
          </div>
        </form>
        <hr />
        <hr />

       
      </div>
    </section>
  );
};

export default CourseDash;
