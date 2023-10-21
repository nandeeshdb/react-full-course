
import React, { useCallback, useEffect, useState,useRef } from 'react'; 


const App = () => {
  
  const[length,setLength] = useState(8)
  const[number,setNumber] = useState(false);
  const[character,setCharacter] =useState(false);
  const[password,setPassword] = useState();
  const  passwordRef = useRef()


  const passGenerator = useCallback(()=>{

    let pass =""
    let str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(number) str+="1234567890"
    if(character) str+="!@#$%^&*()-="

    for(let i=1; i<=length ; i++){
      const char = Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(char)
    }
    setPassword(pass);


  },[length,number,character])
  

  useEffect(()=>{
    passGenerator()
  },[length,number,character])

  const copypassword = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }


  return (
    <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-600'>Password Generator
      <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copypassword}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-l'>
          <input type='range' min={8} max={50} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
          <label>{length}</label> 
        </div>
        <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{setNumber((prev)=> !prev)}}/>
        <label>number</label>
        <input type="checkbox" defaultChecked={character} id="characterInput" onChange={()=>{setCharacter((prev)=> !prev)}}/>
        <label>character</label>
      </div>

    </div>
  )
}

export default App