import "./LoginPage.css";
import  Cash from "../../assets/Cash.png"
import  MaoMoney from "../../assets/maoMoney.png"
import { Link } from "react-router-dom";
import api from "../../services/api"
import {  useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [errorMessage, setErrorMessage] = useState('')

  const inputUser = useRef()
  const inputPassword = useRef()

  const navigate = useNavigate()

  async function login() {

    

    try{

      const email = inputUser.current.value
      const password = inputPassword.current.value

      if (!email || !password) {
        console.error('User or password is empty');
        return;
      }

      const response = await api.post('/login',{email,password})

      if(response.status === 200){
        const token = response.data

        localStorage.setItem('authToken', token)
        setErrorMessage('')
        console.log('login sucessfully',)
        navigate('/home')
      }
     
    }catch(error){

      if (error.response?.status === 404) {
        setErrorMessage('Usuário não encontrado!');
      } else if (error.response?.status === 401) {
        setErrorMessage('Email ou senha inválidos!');
      } else {
        setErrorMessage('Erro inesperado. Tente novamente mais tarde.');
      }
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
        {errorMessage && (
             <div>
             <p color="red">Usuario ou senha incorretos</p>
           </div>
          )}
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
