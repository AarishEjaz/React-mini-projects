import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>Programming Beast</h1>
    </>
  )
}

export default App
