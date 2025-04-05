import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PatientList from "./PatientList.js";
import DoctorList from "./DoctorList.js";
import AppointmentList from "./AppointmentList.js";
import Billing from "./Billing.js";
import Stock from "./Stock.js";
import "./styles.css";

function App() {
  return (
    
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/stock">Stock</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
