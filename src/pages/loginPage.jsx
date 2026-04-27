import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail, MdKey } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(){
    toast.success("Email: "+email +" Password: "+password)
    try{
      const res= await axios.post("http://localhost:3000/users/login",
        {
          email: email,
          password: password
        })
      console.log(res)

    } catch (err) {
      console.log(err)
      toast.error("Login Failed")
    }
  }
  return (
    <div className="w-full h-full bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
      
      <div className="w-100 h-125 backdrop-blur-md shadow-2xl shadow-white rounded-xl flex flex-col p-4 ">
        <h1 className="w-full h-20 text-4xl font-bold text-center text-white">Login</h1>

        <div className="w-full">
          <label className="text-white text-lg flex items-center gap-2"> <MdEmail/> Email</label>
          <input className="w-full h-10 rounded-md px-2 border border-white " type="email" placeholder="kasun@gmail.com"
          onChange={
            (event)=>{
              setEmail(event.target.value)
            }
          }
          value={email}
          />
        </div>
      
      <div className="w-full mt-5">
          <label className="text-white text-lg flex items-center gap-2"> <MdKey/> Password</label>
          <input className="w-full h-10 rounded-md px-2 border border-white " type="password" placeholder="••••••••"
          onChange={
            (event)=>{
              setPassword(event.target.value)
            }
          }
          value={password}
          />
        </div>

      <p className="w-full h-2 text-white text-right italic">Forget your password? Click 
        <Link to="/forget-password" className="font-bold text-accent">Here</Link></p>

      <button className="w-full h-12.5 bg-accent text-white rounded-lg mt-10" onClick={handleLogin}>Sign In</button>

      <p className="w-full h-2 text-white text-right italic mt-0.5">Don't have an account? Click 
        <Link to="/register" className="font-bold text-accent">Here</Link></p>

        <button className="w-full h-12.5 bg-secondary text-white rounded-lg flex items-center justify-center gap-2 mt-5">
          <FcGoogle className="text-lg"/>Sign In with Google</button>
      </div>
    </div>
  )
}
