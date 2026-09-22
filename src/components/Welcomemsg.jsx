import React from 'react'
import { useParams } from 'react-router-dom'

const Welcomemsg = () => {
    const {username}=useParams();
  return (
   <h1>Welcome.msg{username}</h1>
  )
}

export default Welcomemsg
