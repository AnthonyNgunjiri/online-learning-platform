import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CourseProvider } from "./dashboard/CourseContext";
import AuthProvider from "./pages/component/Authentication/AuthContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </AuthProvider>

    <ToastContainer />
  </BrowserRouter>
);
