import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    setCount(count+1)
  }
  const removeValue=()=>{
    setCount(count-1)
  }

  return (
    <>
     <h1>Counter</h1>
     <h2>{count}</h2>
     <button onClick={addValue} >Add +1 </button>
     <br/>
     <buuton onClick={removeValue}>Remove -1</buuton>

    </>
  )
}

export default App
