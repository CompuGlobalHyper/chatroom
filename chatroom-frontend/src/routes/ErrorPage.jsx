import React from 'react'
import { useState } from 'react'

export default function ErrorPage() {
    const [error, setError] = useState('')
  return (
    <div>
        <p>Uh something went wrong.. {error}</p>
      
    </div>
  )
}
