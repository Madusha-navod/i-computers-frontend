import React, { useState } from 'react'
import uploadMedia from '../utils/mediaUpload'
// import toast from 'react-hot-toast'
// import { FaYoutube } from "react-icons/fa";


export default function TestPage() {

  const [file, setFile] = useState(null)

  async function uploadFile(){
   
    const res = await uploadMedia(file)

    console.log(res)
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <input type="file" className="w-64 h-10 rounded-lg border-2 border-gray-400 m-2 py-2 px-8"
      onChange={
        (e)=>{

          setFile(e.target.files[0])
        }
      } />
      <button className="w-25 h-10 bg-blue-600 rounded-lg p-2 text-white "
      onClick={uploadFile}>Upload</button>
    </div>
  )
}



// export default function TestPage() {

//   const [score, setScore] = useState(50)
//   const [mood, setMood] =useState("😀")
//   const [isSubscribed, setIsSubscribed] = useState(false)

  
//   return (
//     <div className='w-full h-full bg-green-400 flex items-center justify-center'>
//       <div className='w-112.5 h-112.5  bg-white flex flex-col justify-center items-center'>
//         <h1 className='font-bold text-6xl'>{score}</h1>

//         <div className='w-full h-25 flex justify-center items-center'>

//           <button className='w-25 h-10 bg-red-600 rounded-lg mx-5'
//           onClick={
//             ()=>{
//               setScore(score-1)
//               // toast("Score decreased by 1!")
//             }
//           }>
//             Decrease
//           </button>

//           <button className='w-25 h-10 bg-green-600 rounded-lg mx-5'
//           onClick={
//             ()=>{
//               setScore(score+1)
//             }
//           }>
//             Increase
//           </button>

//         </div>
//         <h1 className='text-6xl'>{mood}</h1>
//         <div className='w-full h-25 flex justify-center items-center'>

//           <button className='w-25 h-10 bg-red-600 rounded-lg mx-5'
//           onClick={
//             ()=>{
//               setMood("😢")
//               toast.error("Oh no! You are sad now!")
//             }
//           }>
//             Sad
//           </button>

//           <button className='w-25 h-10 bg-green-600 rounded-lg mx-5'
//           onClick={
//             ()=>{
//               setMood("😐")
//               toast("Hmm! You are neutral now!")
//             }
//           }>
//             Neutral
//           </button>

          
//           <button className='w-25 h-10 bg-blue-600 rounded-lg mx-5'
//           onClick={
//             ()=>{
//               setMood("😀")
//               toast.success("Ya! You are happy now!",
//                 {
//                   icon:'😀'
//                 }
//               )
//             }
//           }>
//             Happy
//           </button>

//         </div>
//         <FaYoutube 
//         onClick={
//           ()=>{
//             toast(" Subscribe to my channel for more content! ",
//             {
//               icon: <FaYoutube className='text-xl text-red-600' />
//             }
//             )
//             // setIsSubscribed(true)
//             setIsSubscribed(!isSubscribed)
//           }
//         } className={isSubscribed ? 'text-5xl text-red-600' : 'text-5xl text-gray-400'} />
//       </div>
//     </div>
//   )
// }
