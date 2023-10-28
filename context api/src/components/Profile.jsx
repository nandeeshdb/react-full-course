import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const { user } = useContext(UserContext)

  if(!user) return <h1>no profile name</h1>


  return (
    <div>
      <h1>Profile Name:{user.userName} </h1>
      </div>
  )
}

export default Profile