import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LandingLogin from "./pages/LandingLogin";
import Home from "./pages/Home";
import LoginCompany from "./pages/Login/Company";
import LoginEmployee from "./pages/Login/Employee";
import RegisterCompany from "./pages/Register/Company";
import RegisterEmployee from "./pages/Register/Employee";
import RequestReset from "./pages/RequestReset";
import ResetPassword from "./pages/ResetPassword";
import PengalamanKerja from "./components/pengalamanKerja";
import ProfilePekerja from "./pages/Profile/Employee/MainProfile";
import Portofolio from "./components/portofolio";
import EditProfilePerusahaan from "./pages/Profile/Recruiter/EditProfile";
import ProfilePerusahaan from "./pages/Profile/Recruiter/MainProfile";

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
          <Route path="/profile-perusahaan">
            <Route index element={<ProfilePerusahaan />} />
          </Route>
          <Route path="/profile-pekerja">
            <Route index element={<ProfilePekerja />} />
          </Route>
          <Route path="/pengalaman-kerja">
            <Route index element={<PengalamanKerja />} />
          </Route>
          <Route path="/portofolio">
            <Route index element={<Portofolio />} />
          </Route>
          <Route path="/edit/:id">
            <Route index element={<EditProfilePerusahaan />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
