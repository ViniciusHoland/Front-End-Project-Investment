import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import LoginPage from "./login/loginpage"


function App() {


  return (

    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
