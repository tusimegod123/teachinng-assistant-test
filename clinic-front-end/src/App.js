import logo from "./logo.svg";
import "./App.css";
import ViewPateient from "./components/ViewPatient";
import ViewElderlyPatients from "./components/ViewElderlyPatients";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import RegisterPatient from "./components/RegisterPatient";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/patients">
          <ViewPateient />
        </Route>
        <Route path="/elderlypatients">
          <ViewElderlyPatients />
        </Route>
        <Route path="/register">
          <RegisterPatient />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
