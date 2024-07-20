import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";
import node from "../../assets/col1.jpg";
import Instructors from "../homepage/instructors";
import { CourseContext } from "../../dashboard/CourseContext";
import { useContext } from "react";
const Courses = () => {
  const { courseData, setCourseData } = useContext(CourseContext);

  return (
    <section className="all">
      <h2 className="head">Explore courses</h2>
      <hr />
      <hr />
      <div className="main-course">
        <div className="sidebar">
          <h2 className="title">All Categories</h2>
          <p className="item">Web development</p>
          <p className="item">data science</p>
          <p className="item">UI/UX design</p>
          <p className="item">Programming languages</p>
        </div>
        <section className="popular">
          <div className="pop">
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3> learn data science</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3>learn Nodejs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3>learn React</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3>learn Prisma</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
          </div>
          <div className="pop">
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3> computer interaction</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3>learn ecmascript</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3>machine learning</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            <div className="cor">
              <img src={node} alt="pic" id="img" />
              <section className="data">
                <h3>learn express</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </section>
              <p>
                <Link to="/course">Explore </Link>
              </p>
            </div>
            {courseData.imageurl && (
        <div className="cor">
          <img src={courseData.imageurl} alt="Course" id="img" />
          <section className="data">
            <h3>{courseData.title}</h3>
            <p>{courseData.description}</p>
          </section>
          <p>
            <Link to="/course">Explore </Link>
          </p>
        </div>
      )}

          </div>
        </section>
       
      </div>
     
      <hr />
      <hr />
      <section>
        <Instructors />
      </section>
    </section>
  );
};

export default Courses;
