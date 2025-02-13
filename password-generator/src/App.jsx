import { useCallback, useEffect, useState,useRef } from 'react'
import "./App.css"


function App() {
  let symbol = "<" + "/" + ">"
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)



  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*-_+=[]{}`~"

    for(let i = 1; i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllow,charAllow,setPassword])

  const copyPasswordToClipboad = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])
  return (
    <>
    <h1 className='bg-blue-300 rounded-xl px-8 py-3'>ProgrammingBeast</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value = {password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboad}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy </button>

        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
          />
          <label className='text-white'>Length:{length}</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={()=>{setNumberAllow((prev)=>!prev)}}
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={()=>{setCharAllow((prev)=>!prev)}}
            />
            <label>Characters</label>
          </div>


      </div>


    </>
  )
}

export default App
