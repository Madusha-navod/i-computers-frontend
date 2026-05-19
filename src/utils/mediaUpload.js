import { createClient } from "@supabase/supabase-js"

// const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZnhsYXh5eXBxb2RweWxjZ2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNDM3NDMsImV4cCI6MjA5MzYxOTc0M30.Gwv8cVnZ3KmHqdp1Y8W0dBWocShH-nXOG-QWEOESea8"

// const url = "https://xpfxlaxyypqodpylcgim.supabase.co"

const key = import.meta.env.VITE_SUPABASE_KEY

const url = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(url, key)

import React from 'react'

export default function uploadMedia(file) {
  return new Promise(
    (resolve, reject)=>{
        if(file == null){
            reject("No file provided")
        }else{
            const timestamp =new Date().getTime()

            const fileName = timestamp + "_" + file.name

            supabase.storage.from("images").upload(fileName, file)
    .then(
      ()=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
        resolve(publicUrl);

      }).catch( (err)=>{

        reject(err.message)

      });

        }
    }
  )
}
