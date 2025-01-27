import "./RegisterPage.css";
import  Cash from "../../assets/Cash.png"
import {useRef} from "react"
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  const navigate = useNavigate()

  async function createdUser(){

    try{

      const name = inputName.current.value
      const email = inputEmail.current.value
      const password = inputPassword.current.value

      if(!name || !email || !password){
        console.error('Name, Email or password is empty');
        return;

      }

      await api.post('/register', {name,email,password})

      console.log("user created sucessfully")
      navigate('/login')

    }catch (error){

      console.error('register failed:', error.response?.data || error.message);

    }

  }

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
          <input type="text" placeholder="Full Name" ref={inputName} required />
          <input type="email" placeholder="Email" ref={inputEmail} required />
          <input type="password" placeholder="Password" ref={inputPassword} required />
          <button type="button" onClick={createdUser}>REGISTER</button>
        </form>
        <a href="/login" className="login-link">Already have an account? Login</a>
      </div>
    </div>
  );
}

export default RegisterPage;
