import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";  

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  return (
    <div className="container">
      <h2>Patient List</h2>
      
      
      {patients.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contact}</td>
                <td>{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patient records found.</p>
      )}
    </div>
  );
}

export default PatientList;
