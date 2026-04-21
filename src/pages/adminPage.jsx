import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function AdminPage() {
  return (
    <div className='w-full h-full flex'>

      <div className='w-75 h-full bg-white flex flex-col'>
      
      <h1 className='w-full h-12.5 bg-gray-400 text-xl font-bold'>Using Anchor Tags</h1>
        <a className='w-25 h-12.5 bg-blue-400 m-3 text-center' href='/admin/'>Orders</a>
        <a className='w-25 h-12.5 bg-blue-400 m-3 text-center' href='/admin/products'>Products</a>
        <a className='w-25 h-12.5 bg-blue-400 m-3 text-center' href='/admin/users'>Users</a>

      <h1 className='w-full h-12.5 bg-gray-400 text-xl font-bold'>Using Link Component</h1>
      <Link className='w-full h-12.5 bg-blue-400 m-3 text-center' to='/admin/'>Orders</Link>
      <Link className='w-full h-12.5 bg-blue-400 m-3 text-center' to='/admin/products'>Products</Link>
      <Link className='w-full h-12.5 bg-blue-400 m-3 text-center' to='/admin/users'>Users</Link>
      </div>

      <div className='w-[calc(100%-300px)] h-full bg-amber-200 '>
        <Routes>
          <Route path='/' element={<h1>Order Page</h1>}/>
          <Route path='/products' element={<h1>Products Page</h1>}/>
          <Route path='/users' element={<h1>Users Page</h1>}/>
        </Routes>

      </div>
      
    </div>
  )
}
