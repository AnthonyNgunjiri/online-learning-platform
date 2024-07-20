import React from "react";
import { useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { BiCategory, BiSolidUserAccount } from "react-icons/bi";
// import { BsCart4 } from "react-icons/bs";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setmenu] = useState("Home");

  return (
    <div className="main-nav">
      <div
        className="access"
        onClick={() => setmenu("Profile")}
        id={menu === "Profile" ? "list" : ""}
      >
        <Link to="/profile">
          <AiOutlineMenuUnfold />
          Profile
        </Link>
      </div>
      <ul className="nav">
        <li
          onClick={() => setmenu("Home")}
          className="li"
          id={menu === "Home" ? "list" : ""}
        >
          <Link to="/home">
            <FaHome />
            Home{" "}
          </Link>
        </li>
        <li
          onClick={() => setmenu("Courses")}
          className="li"
          id={menu === "Courses" ? "list" : ""}
        >
          <Link to="/courses">
            <BiCategory />
            Courses
          </Link>
        </li>
        <li
          onClick={() => setmenu("Dashboard")}
          className="li"
          id={menu === "Dashboard" ? "list" : ""}
        >
          <Link to="/dashboard">
            <BiCategory />
            Dashboard{" "}
          </Link>
        </li>
        <li
          onClick={() => setmenu("Register")}
          className="li"
          id={menu === "Register" ? "list" : ""}
        >
          <Link to="/">
            <BiSolidUserAccount />
            Signup{" "}
          </Link>
        </li>
      </ul>
      <input type="text" placeholder="   search courses" />
    </div>
  );
};

export default Nav;
