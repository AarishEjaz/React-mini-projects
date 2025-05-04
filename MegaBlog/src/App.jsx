import { useState } from 'react'
import{useDispatch} from 'react-redux'

import './App.css'

function App() {

  const[loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>Programming Beast</h1>
    </>
  )
}

export default App
