import "../../frontend/src/assets/global.css";
import Nav from "./pages/component/navigation/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Footer from "./pages/component/footer/Footer.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Course from "./pages/courses/Course.jsx";
import PrivateRoute from "./pages/component/Authentication/privateRoute.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course" element={<Course />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
