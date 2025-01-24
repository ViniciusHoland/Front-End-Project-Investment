import "./RegisterPage.css";
import  Cash from "../../assets/Cash.png"

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="branding">
        <img src={Cash} alt="Invest Logo" className="logo" />
        <h1>CREATE YOUR ACCOUNT</h1>
        <hr />
      </div>
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">REGISTER</button>
        </form>
        <a href="/login" className="login-link">Already have an account? Login</a>
      </div>
    </div>
  );
}

export default RegisterPage;
