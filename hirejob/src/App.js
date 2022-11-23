import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/">{/* <Route index element={<Home />} /> */}</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
