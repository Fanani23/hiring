import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePekerja from "./pages/Profile/Employee/MainProfile";
import EditProfilePekerja from "./pages/Profile/Employee/EditProfile";
import HirePage from "./pages/Hire";
import ProfilePerusahaan from "./pages/Profile/Recruiter/MainProfile";
import EditProfilePerusahaan from "./pages/Profile/Recruiter/EditProfile";
import LandingPage from "./pages/LandingPage";
import LandingLogin from "./pages/LandingLogin";
import Home from "./pages/Home";

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
          <Route path="/profilePekerja" element={<ProfilePekerja />} />
          <Route path="/profilePerusahaan" element={<ProfilePerusahaan />} />
          <Route path="/editProfile1" element={<EditProfilePekerja />} />
          <Route path="/editProfile2" element={<EditProfilePerusahaan />} />
          <Route path="/hirePage" element={<HirePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
