import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
// import ProfilePekerja from "./pages/Profile/Employee/MainProfile";
// import EditProfilePekerja from "./pages/Profile/Employee/EditProfile";
// import HirePage from "./pages/Hire";
// import ProfilePerusahaan from "./pages/Profile/Recruiter/MainProfile";
// import EditProfilePerusahaan from "./pages/Profile/Recruiter/EditProfile";
import LandingPage from "./pages/LandingPage";
import LandingLogin from "./pages/LandingLogin";
import Home from "./pages/Home";
import LoginCompany from "./pages/Login/Company";
import LoginEmployee from "./pages/Login/Employee";
import RegisterCompany from "./pages/Register/Company";
import RegisterEmployee from "./pages/Register/Employee";
import RequestReset from "./pages/RequestReset";
import ResetPassword from "./pages/ResetPassword";
// import LoginEmployee from "../src/pages/Auth/Login/Employee";
// import LoginRecruiter from "../src/pages/Auth/Login/Recruiter";
// import RegisterEmployee from "../src/pages/Auth/Register/Employee";
// import RegisterRecruiter from "../src/pages/Auth/Register/Recruiter";
// import ResetPassword from "../src/pages/Auth/ResetPassword";
// import KonfirmasiResetPassword from "../src/pages/Auth/KonfirResetPassword";
// import RequestPassword from "../src/pages/Auth/requestPass";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/landing-login">
            <Route index element={<LandingLogin />} />
          </Route>
          <Route path="/home">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login-company">
            <Route index element={<LoginCompany />} />
          </Route>
          <Route path="/login-employee">
            <Route index element={<LoginEmployee />} />
          </Route>
          <Route path="/register-employee">
            <Route index element={<RegisterEmployee />} />
          </Route>
          <Route path="/register-company">
            <Route index element={<RegisterCompany />} />
          </Route>
          <Route path="/request-reset">
            <Route index element={<RequestReset />} />
          </Route>
          <Route path="/reset-password">
            <Route index element={<ResetPassword />} />
          </Route>
          {/* <Route path="/profilePekerja" element={<ProfilePekerja />} />
          <Route path="/profilePerusahaan" element={<ProfilePerusahaan />} />
          <Route path="/editProfile1" element={<EditProfilePekerja />} />
          <Route path="/editProfile2" element={<EditProfilePerusahaan />} />
          <Route path="/hirePage" element={<HirePage />} /> */}
          {/* <Route path="/loginEmployee" element={<LoginEmployee />} />
          <Route path="/loginRecruiter" element={<LoginRecruiter />} />
          <Route path="/registerEmploye" element={<RegisterEmployee />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/konfirmasiResetPassword"
            element={<KonfirmasiResetPassword />}
          />
          <Route path="/requestPassword" element={<RequestPassword />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
