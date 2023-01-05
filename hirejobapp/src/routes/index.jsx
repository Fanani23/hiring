import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Swal from "sweetalert2";
import EditCompany from "../pages/Edit/Company";
import EditEmployee from "../pages/Edit/Employee";
import Hire from "../pages/Hire";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import LoginCompany from "../pages/Login/Company";
import LoginEmployee from "../pages/Login/Employee";
import Profile from "../pages/Profile";
import RegisterCompany from "../pages/Register/Company";
import RegisterEmployee from "../pages/Register/Employee";
import NewPassword from "../pages/ResetPassword/NewPassword";
import RequestEmail from "../pages/ResetPassword/RequestEmail";
import Verification from "../pages/Verification";

const Router = () => {
  //   const PrivateRoute = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       return <Outlet />;
  //     } else {
  //       Swal.fire("Warning", "Please login first", "error");
  //       return <Navigate to="/login" />;
  //     }
  //   };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/company" element={<LoginCompany />} />
        <Route path="/login/employee" element={<LoginEmployee />} />
        <Route path="/register/company" element={<RegisterCompany />} />
        <Route path="/register/employee" element={<RegisterEmployee />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/request-reset" element={<RequestEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/edit-company" element={<EditCompany />} />
        <Route path="/edit-employee" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
