import { Route, Routes } from "react-router-dom";
import LoginEmployee from "../src/pages/Auth/Login/Employee";
import LoginRecruiter from "../src/pages/Auth/Login/Recruiter";
import RegisterEmployee from "../src/pages/Auth/Register/Employee";
import RegisterRecruiter from "../src/pages/Auth/Register/Recruiter";
import ResetPassword from "../src/pages/Auth/ResetPassword"
import KonfirmasiResetPassword from "../src/pages/Auth/KonfirResetPassword";
import RequestPassword from "../src/pages/Auth/requestPass";
import Chat from "../src/pages/Chat"
import Notifikasi from "./pages/Notifikasi";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/loginEmployee' element={<LoginEmployee />} />
          <Route path='/loginRecruiter' element={<LoginRecruiter />} />
          <Route path='/registerEmploye' element={<RegisterEmployee />} />
          <Route path='/registerRecruiter' element={<RegisterRecruiter />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/konfirmasiResetPassword' element={<KonfirmasiResetPassword />} />
          <Route path='/requestPassword' element={<RequestPassword />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/Notifikasi' element={<Notifikasi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
