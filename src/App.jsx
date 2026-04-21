import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'

function App() {
  

  return (
    <div className="w-full h-screen ">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      
      <Route path='/signin' element={<LoginPage/>}/>

      <Route path='/signup'element={<RegisterPage/>}/>

      <Route path='/admin/*' element={<AdminPage/>} />
    </Routes>
    </div>
  ) 
}

export default App