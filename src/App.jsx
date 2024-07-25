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
import AdminDashboard from "./dashboard/AdminDashboard.jsx";
import TutorDashboard from "./dashboard/TutorDashboard.jsx";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
  <Route path="/" element={<Register />} />
  <Route path="/login" element={<Login />} />

  <Route element={<PrivateRoute roles={["ADMIN", "TUTOR", "STUDENT"]} redirectTo="/login" />}>
    <Route path="/home" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
  </Route>

  <Route element={<PrivateRoute roles={["ADMIN", "TUTOR"]} redirectTo="/login" />}>
    <Route path="/profile" element={<Profile />} />
  </Route>

  <Route element={<PrivateRoute roles={["ADMIN"]} redirectTo="/login" />}>
    <Route path="/dashboard" element={<Dashboard />} />
  </Route>
  <Route element={<PrivateRoute roles={["ADMIN"]} redirectTo="/login" />}>
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
  </Route>

  <Route element={<PrivateRoute roles={["TUTOR"]} redirectTo="/login" />}>
    <Route path="/course" element={<Course />} />
    <Route path="/tutor-dashboard" element={<TutorDashboard />} />

  </Route>
</Routes>

      <Footer />
    </>
  );
};

export default App;
