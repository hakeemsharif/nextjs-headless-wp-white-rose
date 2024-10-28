"use client"

import { useEffect } from 'react'
import '@/app/styles/error.css'
export default function Error({ error, reset }) {
    
    useEffect(() => {
        console.error(error)
      }, [error])

  return (
    <div className="error-page">
       <h1>Something went wrong!</h1>
       <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
