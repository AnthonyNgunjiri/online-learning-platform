import React from "react";
import "./courses.css";
import CourseDash from "../../dashboard/CourseDash";
import student from "../../assets/student-bg-1.jpg";
import { GrNotes } from "react-icons/gr";
<GrNotes />;
import { GrDocumentNotes } from "react-icons/gr";
<GrDocumentNotes />;

const course = () => {
  return (
    <section className="major">
      <hr />
      <hr />
      <section className="meet">
        <section>
          <h2 className="head">learn tech from zero to a hero</h2>
          <img src={student} alt="" className="imagery" />
        </section>
        <section className="section">
          <div>
            <ul className="mycos">
             
              <h4>Curriculum</h4>
              <h4>Instructor</h4>
              <h4>services</h4>
            </ul>
          </div>
          <div className="minor">
            <section className="heads">
              <h3 className="">section 1:</h3> <h3 className="">basic </h3>
            </section>
            <ol className="modules">
              <li id="lec">
                <p id="note">
                  <GrNotes /> lecture 1.1
                </p>
              <p> Introduction</p>  
                <p>40min</p>
              </li>
              <hr />
              <li id="lec">
               
                <p id="note">
                  <GrNotes /> 
                  lecture 1.2
                </p>
               <p> Setup work</p> 
                <p>40min</p>
              </li>
              <hr />
              <li id="lec">
                <p id="note">
                  <GrNotes />
                  lecture 1.3
                </p>
               <p> Packaging</p> 
                <p>40min</p>
              </li>
              <hr />
            </ol>
          </div>
          <div className="minor">
            <section className="heads">
              <h3 className="">section 1:</h3>{" "}
              <h3 className="">advanced </h3>
            </section>
            <ol className="modules">
              <li id="lec">
                <p id="note">
                  <GrDocumentNotes />
                  lecture 2.1
                </p>
               <p> Utility module</p> 
                <p>40min</p>
              </li>
              <hr />
              <li id="lec">
                <p id="note">
                  <GrDocumentNotes />
                  lecture 2.2
                </p>{" "}
               <p> Web module</p> 
                <p>40min</p>
              </li>
              <hr />
              <li id="lec">
                <p id="note">
                  <GrDocumentNotes />
                  lecture 2.3
                </p>
               <p> framework</p> 
                <p>40min</p>
              </li>
              <hr />
            </ol>
          </div>
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
