import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api_secret } from "../utility/config";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${api_secret}/api/tutors`);
        console.log(response);
        if (!response.ok) {
          throw new error("Failed to fetch users");
        }
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="code">
      {users.map((tutor) => (
        <section key={tutor.id} className="">
          {tutor.avatarurl && (
            <div className="team">
              <div className="part1">
                <img
                  src={tutor.avatarurl}
                  alt="instructor"
                  className="iconic"
                />
                <section className="date">
                  <span className="bio">
                    <h3 className="title">{tutor.title}</h3>
                    <span className="ico">
                      <p className="degree">{tutor.FirstName}</p>
                      <p className="degree">{tutor.LastName}</p>
                    </span>
                    <p className="degree">{tutor.level}</p>
                  </span>
                  <span className="iconis">
                    <div className="icons">
                      <p className="ice">
                        <FaFacebook />
                      </p>
                    </div>
                    <div className="icons">
                      <p className="ice">
                        <FaSquareXTwitter />
                      </p>
                    </div>
                    <div className="icons">
                      <p className="ice">
                        <FaLinkedinIn />
                      </p>
                    </div>
                    <div className="icons">
                      <p className="ice">
                        <FaSquareInstagram />
                      </p>
                    </div>
                  </span>
                </section>
              </div>

              <div className="part2">{tutor.bio}</div>
            </div>
          )}
        </section>
      ))}
    </section>
  );
};

export default User;
