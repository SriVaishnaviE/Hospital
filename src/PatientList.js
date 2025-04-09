import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    condition: "",
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios.get("http://127.0.0.1:5000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error fetching patients:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:5000/patients", formData)
      .then(() => {
        setFormData({ name: "", age: "", gender: "", contact: "", condition: "" });
        fetchPatients();  
      })
      .catch((error) => console.error("Error adding patient:", error));
  };

  return (
    <div className="container">
      <h2>Patient List</h2>

     
      <form onSubmit={handleSubmit} className="patient-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
        <input type="text" name="condition" placeholder="Condition" value={formData.condition} onChange={handleChange} required />
        <button type="submit">Add Patient</button>
      </form>

      
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
