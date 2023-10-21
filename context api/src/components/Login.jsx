import React, { useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({userName,password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} placeholder='username'/><br/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password'/><br/>
        <button onClick={handleSubmit}>submit</button>
        
        </div>
  )
}

export default Login