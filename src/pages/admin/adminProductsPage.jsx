import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const sampleProducts = [
  {
  "productId": "PRD001",
  "name": "Logitech G502 HERO Gaming Mouse",
  "altNames": ["G502 Mouse", "Logitech Gaming Mouse"],
  "description": "High-performance wired gaming mouse with HERO sensor and customizable RGB lighting.",
  "price": 14500,
  "labelledPrice": 16500,
  "images": ["/images/g502-1.png", "/images/g502-2.png"],
  "isAvailable": true,
  "category": "Accessories",
  "stock": 25,
  "brand": "Logitech",
  "model": "G502 HERO"
},
{
  "productId": "PRD002",
  "name": "Corsair K95 RGB Platinum Keyboard",
  "altNames": ["Corsair Keyboard", "K95 RGB"],
  "description": "Premium mechanical gaming keyboard with RGB backlighting and Cherry MX switches.",
  "price": 45000,
  "labelledPrice": 50000,
  "images": ["/images/k95-1.png", "/images/k95-2.png"],
  "isAvailable": true,
  "category": "Accessories",
  "stock": 15,
  "brand": "Corsair",
  "model": "K95 RGB Platinum"
},
{
  "productId": "PRD003",
  "name": "Samsung 970 EVO Plus 1TB SSD",
  "altNames": ["Samsung SSD 1TB", "970 EVO Plus"],
  "description": "High-speed NVMe SSD with excellent performance for gaming and professional workloads.",
  "price": 32000,
  "labelledPrice": 35000,
  "images": ["/images/ssd-1.png", "/images/ssd-2.png"],
  "isAvailable": true,
  "category": "Storage",
  "stock": 30,
  "brand": "Samsung",
  "model": "970 EVO Plus"
},
{
  "productId": "PRD004",
  "name": "NVIDIA GeForce RTX 4060 8GB",
  "altNames": ["RTX 4060", "NVIDIA GPU"],
  "description": "Latest generation graphics card for high-performance gaming and content creation.",
  "price": 145000,
  "labelledPrice": 155000,
  "images": ["/images/rtx4060-1.png", "/images/rtx4060-2.png"],
  "isAvailable": true,
  "category": "Graphics Card",
  "stock": 10,
  "brand": "NVIDIA",
  "model": "RTX 4060"
},
{
  "productId": "PRD005",
  "name": "ASUS TUF Gaming 27\" Monitor",
  "altNames": ["ASUS Monitor", "TUF 27 Inch"],
  "description": "27-inch Full HD gaming monitor with 165Hz refresh rate and adaptive sync.",
  "price": 85000,
  "labelledPrice": 92000,
  "images": ["/images/monitor-1.png", "/images/monitor-2.png"],
  "isAvailable": true,
  "category": "Monitors",
  "stock": 12,
  "brand": "ASUS",
  "model": "TUF Gaming VG27"
}
]
export default function AdminProductsPage() {

  const [products, setProducts] = useState(sampleProducts)

  return (
    <div className="w-full h-full">
        
        {
          products.map(
            (product, index)=>{
              // toast.success(product.productId + "-" +index)

              return( 
              <div key={product.productId}>
                <p>
                {product.productId} - {product.name} - {product.price}
                </p>
              </div>)
            }
          )
        }
      <Link to="/admin/add-product" className="bg-white w-20 h-20 rounded-full text-accent text-4xl flex items-center 
      justify-center fixed bottom-4 right-4 shadow-2xl border-2 hover:bg-accent hover:text-white ">
        <FaPlus/>
      </Link>
    </div>
  )
}
