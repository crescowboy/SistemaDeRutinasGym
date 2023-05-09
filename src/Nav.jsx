import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className='navbar'>
        <ul>
            
        <li><NavLink className={
            ({isActive})=> (isActive ? "activado"
            : null)
        } to="/">Inicio</NavLink></li>
        <li><NavLink className={
            ({isActive})=> (isActive ? "activado"
            : null)
        } to="/registrarPr">Registrar Pr</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/registrarRutinas">Registrar runinas</NavLink></li>   
        </ul>
    </nav>
  )
}

export default Nav