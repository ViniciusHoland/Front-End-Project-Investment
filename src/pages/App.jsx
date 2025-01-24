import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import LoginPage from "./login/loginpage"
import RegisterPage from "./register/register"


function App() {


  return (

    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
