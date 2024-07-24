import React from "react";
import "./profile.css";
import user from "../../assets/cartoon.jpeg";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="me">
          <div className="me">
            <img className="iconic" src={user} alt="User's profile picture" />
            <div>
              <span className="name">
                <h2 className="">John</h2>
                <h2 className=""> Doe </h2>
              </span>
              
            <span className="name">
            <label htmlFor="">
                <MdEmail />
              </label>
              <p className="">john.doe@gmail.com</p>
            </span>
             <span className="name">
             <label htmlFor="">
                <BsFillTelephonePlusFill />

                <b>Telephone:</b>
              </label>
              <p className="tel">0723434199</p>
             </span>
             <span className="name">
             <label htmlFor="">
                <IoPersonAddSharp />
                <b>Member since:</b>
              </label>
              <p className=""> Jan 2021</p>
             </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="">My Courses</h3>
          <div className="space-y-4">
            <div>
              <p className="">Course 1</p>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <p>Course 2</p>
              <div>
                <div className=""></div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Course 3</p>
              <div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="">Achievements</h3>
          <div className="flex space-x-4">
            <div className="text-center">
              <img className="" src="" alt="Badge 1" />
              <p className="text-sm">Badge 1</p>
            </div>
            <div className="text-center">
              <img className="" src="" alt="Badge 2" />
              <p className="text-sm">Badge 2</p>
            </div>
            <div className="text-center">
              <img className="" src="" alt="Badge 3" />
              <p className="text-sm">Badge 3</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Settings</h3>
          <div className="space-y-4">
            <button>Change Password</button>
            <button>Update Profile Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
