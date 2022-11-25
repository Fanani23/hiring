import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LandingLogin from "./pages/LandingLogin";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/home">
            <Route index element={<LandingLogin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
