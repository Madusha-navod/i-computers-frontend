import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function AdminProductsPage() {
  return (
    <div className="w-full h-full">
        
      <button className="bg-accent w-20 h-20 rounded-full text-white text-4xl flex items-center 
      justify-center fixed bottom-4 right-4 shadow-2xl hover:bg-white hover:text-accent ">
        <FaPlus/>
      </button>
    </div>
  )
}
