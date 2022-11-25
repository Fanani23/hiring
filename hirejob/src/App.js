import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePekerja from "./page/profile/employee/mainProfile";
import EditProfilePekerja from "./page/profile/employee/editProfile";
import HirePage from "./page/hire";
import ProfilePerusahaan from "./page/profile/recruiter/mainProfile";
import EditProfilePerusahaan from "./page/profile/recruiter/editProfile";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          {/* <Route path="/"><Route index element={<Home />} /></Route> */}
          <Route path='/' element={<Navigate to="Home" replace="true"/>} />
          <Route path="/profilePekerja" element={<ProfilePekerja/>} />
          <Route path="/profilePerusahaan" element={<ProfilePerusahaan/>} />
          <Route path="/editProfile1" element={<EditProfilePekerja/>} />
          <Route path="/editProfile2" element={<EditProfilePerusahaan/>} />
          <Route path="/hirePage" element={<HirePage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
