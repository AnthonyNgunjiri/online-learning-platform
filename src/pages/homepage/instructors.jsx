import React from "react";
import "./home.css";
import { useContext } from "react";
import instructor from "../../assets/col2.jpg";
import { CourseContext } from "../../dashboard/CourseContext";
const instructors = () => {

const { profileData, setProfileData } = useContext(CourseContext);

  return (
    <section className="">
      <div className="instructor">
        <h2 className="head">our team</h2>
        <hr />
        <section className="they">
          <div className="team">
            <div className="part1">
              <img src={instructor} alt="instructor" className="iconic" />
              <section className="date">
                <span className="bio">
                  <h3 className="title">Prof. Parker</h3>
                  <p className="degree">Bachelor</p>
                </span>
                <span className="iconis">
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                </span>
              </section>
            </div>
            <div className="part2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quasi eum numquam vel commodi distinctio pariatur cupiditate
              soluta voluptatum unde.
            </div>
          </div>
          <div className="team">
            <div className="part1">
              <img src={instructor} alt="instructor" className="iconic" />
              <section className="date">
                <span className="bio">
                  <h3 className="title">Prof. Parker</h3>
                  <p className="degree">Bachelor</p>
                </span>
                <span className="iconis">
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                </span>
              </section>
            </div>
            <div className="part2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quasi eum numquam vel commodi distinctio pariatur cupiditate
              soluta voluptatum unde.
            </div>
          </div>
          <div className="team">
            <div className="part1">
              <img src={instructor} alt="instructor" className="iconic" />
              <section className="date">
                <span className="bio">
                  <h3 className="title">Prof. Parker</h3>
                  <p className="degree">Bachelor</p>
                </span>
                <span className="iconis">
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                </span>
              </section>
            </div>
            <div className="part2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quasi eum numquam vel commodi distinctio pariatur cupiditate
              soluta voluptatum unde.
            </div>
          </div>
          {profileData.imageurl && (  
            <div className="team">
            <div className="part1">
              <img src={profileData.imageurl} alt="instructor" className="iconic" />
              <section className="date">
                <span className="bio">
                  <h3 className="title">{profileData.title}</h3>
                  <p className="degree">{profileData.FirstName}</p>
                  <p className="degree">{profileData.LastName}</p>
                  <p className="degree">{profileData.level}</p>
                </span>
                <span className="iconis">
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                </span>
              </section>
            </div>
            <div className="part2">
            {profileData.bio}
            </div>
          </div>
          )}
          
        </section>
      </div>
    </section>
  );
};

export default instructors;
