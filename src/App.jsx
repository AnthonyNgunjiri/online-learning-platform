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
      <PrivateRoute path="/profile" element={<Profile />} />
           <PrivateRoute path="/home" element={<Home />} />
           <PrivateRoute path="/courses" element={<Courses />} />
           <PrivateRoute path="/course" element={<Course />} />
           <Route path="/login" element={<Login />} />
           <Route path="/" element={<Register />} />
           <PrivateRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
