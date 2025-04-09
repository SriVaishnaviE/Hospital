import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    specialization: "",
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get("http://127.0.0.1:5000/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error fetching doctors:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/doctors", formData)
      .then(() => {
        setFormData({ name: "", department: "", specialization: "" });
        fetchDoctors(); 
      })
      .catch((error) => console.error("Error adding doctor:", error));
  };

  return (
    <div className="container">
      <h2>Doctor List</h2>

     
      <form onSubmit={handleSubmit} className="doctor-form">
        <input
          type="text"
          name="name"
          placeholder="Doctor's Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>

     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.department}</td>
              <td>{doctor.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
