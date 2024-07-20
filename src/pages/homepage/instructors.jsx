import React from "react";
import "./home.css";
import instructor from "../../assets/col2.jpg";
const instructors = () => {
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
        </section>
      </div>
    </section>
  );
};

export default instructors;
