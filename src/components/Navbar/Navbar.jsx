import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'
import urlHome from '../../assets/home-page.png'

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <NavLink to="/"><img src={urlHome} alt='home' /></NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar