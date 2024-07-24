import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import { CourseProvider } from "./dashboard/CourseContext";
import AuthProvider from "./pages/component/Authentication/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </AuthProvider>

    <ToastContainer />
  </Router>
);
