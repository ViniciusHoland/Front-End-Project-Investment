import "./LoginPage.css";
import  Cash from "../../assets/Cash.png"
import  MaoMoney from "../../assets/maoMoney.png"
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container">
      <div className="branding">
        <img src={Cash} alt="Invest Logo" className="logo" />
        <h1>INVEST POPULATION SOFTWARE</h1>
        <hr />
      </div>
      <div className="login-box">
        <div className="icon">
          <img src={MaoMoney} alt="Hand with money icon" />
        </div>
        <form>
          <input type="text" placeholder="username" required />
          <input type="password" placeholder="password" required />
          <button type="submit">LOGIN</button>
        </form>
          <Link 
            to={`/register`}
          >
            Register
          </Link>
        
        
      </div>
    </div>
  );
}

export default LoginPage;
