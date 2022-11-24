// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePekerja from "./page/profile/employee/mainProfile";
import EditProfilePekerja from "./page/profile/employee/editProfile";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          {/* <Route path="/"><Route index element={<Home />} /></Route> */}
          <Route path='/' element={<Navigate to="Home" replace="true"/>} />
          <Route path="/profilePekerja" element={<ProfilePekerja/>} />
          <Route path="/editProfile1" element={<EditProfilePekerja/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
