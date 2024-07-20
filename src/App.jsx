import "../../frontend/src/assets/global.css";
import Nav from "./pages/component/navigation/Nav.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
// import Register from "./pages/register/Register.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Footer from "./pages/component/footer/Footer.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Course from "./pages/courses/Course.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
         <Route path="/course" element={<Course/>}/> 
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
