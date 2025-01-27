import "./LoginPage.css";
import  Cash from "../../assets/Cash.png"
import  MaoMoney from "../../assets/maoMoney.png"
import { Link } from "react-router-dom";
import api from "../../services/api"
import {  useRef } from "react";

function LoginPage() {

  const inputUser = useRef()
  const inputPassword = useRef()


  async function login() {

    try{

      const email = inputUser.current.value
      const password = inputPassword.current.value

      if (!email || !password) {
        console.error('User or password is empty');
        return;
      }

      await api.post('/login',{email,password})
      
      console.log('login sucessfully')

    }catch(error){

      console.error('Login failed:', error.response?.data || error.message);


    }

  }


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
          <input type="text" placeholder="username" ref={inputUser} required />
          <input type="password" placeholder="password" ref={inputPassword} required />
          <button type="button" onClick={login} >LOGIN</button>
        </form>
        <div className="register-link">
        <Link 
            to={`/register`}
          >
            Register
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default LoginPage;
