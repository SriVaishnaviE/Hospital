import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/appointments")
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  return (
    <div className="container">
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
