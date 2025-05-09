import { useState } from 'react'
import{useDispatch} from 'react-redux'
import authService from "./appwrite/auth"

import './App.css'

function App() {

  const[loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  console.log(import.meta.env.VITE_APPWRITE_URL)

  useEffect(()=>{
    authService
  },[])

  return (
    <>
      <h1>Programming Beast</h1>
    </>
  )
}

export default App
