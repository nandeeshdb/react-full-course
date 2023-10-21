import React, { useState } from 'react';


const App = () => {
  const[color,setColor] = useState("white")
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-[50%]'>
        <div className='flex flex-wrap justify-center rounded-2xl shadow-xl p-3 gap-4 bg-white'>
          <button className='rounded-4xl p-2 outline-none text-white' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='rounded-4xl p-2 outline-none text-white' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
          <button className='rounded-4xl p-2 outline-none text-white' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
          <button className='rounded-4xl p-2 outline-none text-white' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
          <button className='rounded-4xl p-2 outline-none text-white' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>

        </div>

      </div>

    </div>
  )
}

export default App