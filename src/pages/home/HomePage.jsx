import "./HomePage.css";
import { useState, useEffect } from "react";
import api from "../../services/api";

function HomePage() {
  const [investments, setInvestments] = useState([]);
  const [error, setError] = useState("");

  //api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

  async function getAllInvestments() {
    try {
      const response = await api.get("/investment"); // Chama o endpoint
      setInvestments(response.data);
    } catch (error) {
      console.error("Error fetching investments:", error);
      setError("Failed to load investments.");
    }
  }

  useEffect(() => {

    getAllInvestments()

  },[])

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="user-profile">
          <div className="avatar" />
          <p>Name User</p>
        </div>
        <nav className="menu">
          <ul>
            <li>DASHBOARD</li>
            <li className="active">HOME</li>
            <li>HISTORY</li>
            <li>SELL A PRODUCT</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <h1>INVESTMENTS WALLET</h1>

        <div className="investment-form">
          <input type="text" placeholder="Investment ID" />
          <input type="text" placeholder="Item name" />
          <input type="number" placeholder="Quantity" />
          <input type="number" placeholder="Unit price" />
          <input type="text" placeholder="Total price" disabled />
          <button className="add-button">+</button>
        </div>

        <div className="balance">
          <p>60,000</p>
        </div>

        <table className="investment-table">
          <thead>
            <tr>
              <th>Investment ID</th>
              <th>I Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Invest</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <tr key={investment.id}>
                <td>{investment.id}</td>
                <td>{investment.item_name}</td>
                <td>{investment.category?.name || "N/A"}</td>
                <td>{investment.quantity || "N/A"}</td>
                <td>{investment.price}</td>
                <td>{investment.amount}</td>
              </tr>
            ))}

          </tbody>
        </table>
        {error && <p className="error-message">{error}</p>}
      </main>
    </div>
  );
}

export default HomePage;
