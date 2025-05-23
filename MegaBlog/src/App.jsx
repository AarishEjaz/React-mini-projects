import { useState, useEffect} from 'react'
import{useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
// import {Header} from './components'

import './App.css'

function App() {

  const[loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  console.log(import.meta.env.VITE_APPWRITE_URL)

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        console.log(userData)
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div>
          <Header />
          <Footer />
        </div>
      </div>
    ) : null

}

export default App
