import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'

// import Apartments from '../../pages/Apartments/Apartments'
const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <NavLink to="/">HOME</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar