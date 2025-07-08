import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement } from './features/counter/counterSlice'



function App() {
  // const [count, setCount] = useState(0)

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  function handleIncrement(){
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  return (
    <div>
    Hello aarish
    <h2>Count: {count}</h2>
      <button onClick={handleIncrement} > + </button>
      <button onClick={handleDecrement} > - </button>
    </div>
  )
}

export default App
