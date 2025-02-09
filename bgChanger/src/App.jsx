import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <h1 className='text-white bg-green-500 p-4 rounded-lg text-xl font-bold' style={{backgroundColor:color}}>Programming <br /> Beast</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-white rounded-3xl text-black'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
