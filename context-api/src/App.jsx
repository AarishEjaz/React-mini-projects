import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
      <h1>React with ProgrammingBeast</h1>
    </UserContextProvider>
      {/* <h1>React with ProgrammingBeast</h1> */}
    </>
  )
}

export default App
