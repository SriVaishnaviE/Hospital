import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function Stock() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/stock")
      .then((response) => setStock(response.data))
      .catch((error) => console.error("Error fetching stock:", error));
  }, []);

  return (
    <div className="container">
      <h2>Medical Stock</h2>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
