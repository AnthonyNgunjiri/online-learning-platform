import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CourseProvider } from "./dashboard/CourseContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CourseProvider>
      <App />
    </CourseProvider>
    <ToastContainer />
  </BrowserRouter>
);
