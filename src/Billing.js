import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function Billing() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/bills")
      .then((response) => setBills(response.data))
      .catch((error) => console.error("Error fetching bills:", error));
  }, []);

  return (
    <div className="container">
      <h2>Billing</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td>{bill.patientName}</td>
              <td>${bill.amount}</td>
              <td className={bill.status === "Paid" ? "status-paid" : "status-unpaid"}>
                {bill.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Billing;
