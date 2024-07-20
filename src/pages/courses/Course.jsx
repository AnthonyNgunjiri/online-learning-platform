import React from "react";
import "./courses.css";
import CourseDash from "../../dashboard/CourseDash";
import student  from "../../assets/student-bg-1.jpg"
const course = () => {
 
  return (
<section className="major">
<div >
<ul className="mycos">
<li>Overview</li>
<li>Curriculum</li>
<li>Instructor</li>
<li>services</li></ul>
</div>
<hr />
<hr />
<section className="meet">
<section className="1">
<div className="minor"><h3>section 1:</h3> <h3 className="head">basic model</h3>
<ol className="modules">
  <li>Introduction</li>
  <li>Setup</li>
  <li>Packaging</li></ol></div>
<div className="minor"><h3>section 2:</h3> <h3 className="head">advanced</h3>
<ol className="modules">
  <li>Utility module</li>
  <li>Web module</li>
  <li>Express framework</li></ol></div>
</section>
<section >
  <h2 className="head">learn  tech from zero to a hero</h2>
  <img src={student} alt=""className="imagery" />
</section>
<section className="2">
<div className="minor">
  <h3 className="head">all courses</h3>
  <ol>
  <li>Backend</li>
  <li>Cascading Style Sheet</li>
  <li> Frontend</li>
  <li>Software Engineering</li>
  <li>Programming Language</li>
  <li>Computer Interaction</li>
  <li>Machine learning</li>
  </ol>
</div>
</section>
</section>



</section>
   
  );
};

export default course;
