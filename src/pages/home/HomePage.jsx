import "./HomePage.css"


function homePage(){


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
                <tr>
                  <td>00123J</td>
                  <td>Banco Brasil</td>
                  <td>Ação</td>
                  <td>10</td>
                  <td>35</td>
                  <td>3500</td>
                </tr>
                <tr>
                  <td>00126M</td>
                  <td>Petrobras</td>
                  <td>Ação</td>
                  <td>15</td>
                  <td>50</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td>00126M</td>
                  <td>Nu bank</td>
                  <td>Renda Fixa</td>
                  <td>50</td>
                  <td>25</td>
                  <td>1250</td>
                </tr>
                <tr>
                  <td>00126M</td>
                  <td>XML11</td>
                  <td>Fiis</td>
                  <td>20</td>
                  <td>75</td>
                  <td>1500</td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      );
    
}

export default homePage