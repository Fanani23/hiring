import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePekerja from "./pages/profile/employee/mainProfile";
import EditProfilePekerja from "./pages/profile/employee/editProfile";
import HirePage from "./pages/Hire";
import ProfilePerusahaan from "./pages/profile/recruiter/mainProfile";
import EditProfilePerusahaan from "./pages/profile/recruiter/editProfile";
import LandingPage from "./pages/LandingPage";
import LoginEmployee from "../src/pages/Auth/Login/Employee";
import LoginRecruiter from "../src/pages/Auth/Login/Recruiter";
import RegisterEmployee from "../src/pages/Auth/Register/Employee";
import RegisterRecruiter from "../src/pages/Auth/Register/Recruiter";
import ResetPassword from "../src/pages/Auth/ResetPassword";
import KonfirmasiResetPassword from "../src/pages/Auth/KonfirResetPassword";
import RequestPassword from "../src/pages/Auth/requestPass";
import Chat from "../src/pages/Chat";
import Notifikasi from "./pages/Notifikasi";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/profilePekerja" element={<ProfilePekerja />} />
          <Route path="/profilePerusahaan" element={<ProfilePerusahaan />} />
          <Route path="/editProfile1" element={<EditProfilePekerja />} />
          <Route path="/editProfile2" element={<EditProfilePerusahaan />} />
          <Route path="/hirePage" element={<HirePage />} />
          <Route path="/loginEmployee" element={<LoginEmployee />} />
          <Route path="/loginRecruiter" element={<LoginRecruiter />} />
          <Route path="/registerEmploye" element={<RegisterEmployee />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/konfirmasiResetPassword"
            element={<KonfirmasiResetPassword />}
          />
          <Route path="/requestPassword" element={<RequestPassword />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Notifikasi" element={<Notifikasi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
