import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
     <Outlet/>
    </>
    
  )
}

export default Template
