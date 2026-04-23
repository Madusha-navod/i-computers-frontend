import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <div className="w-full h-screen ">
      <Toaster position='top-center'/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      
      <Route path='/signin' element={<LoginPage/>}/>

      <Route path='/signup'element={<RegisterPage/>}/>

      <Route path='/admin/*' element={<AdminPage/>} />

      <Route path='/test' element={<TestPage/>} />
      
    </Routes>
    </div>
  ) 
}

export default App