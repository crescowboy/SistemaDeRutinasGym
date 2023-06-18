import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className='navbar'>
        <ul>
          
        <li><NavLink to="/principal">Inicio</NavLink></li>
        <li><NavLink to="/registrarPr">Registrar Pr</NavLink></li>
        <li><NavLink to="/registrarRutinas">Registrar runinas</NavLink></li>   
        <li><NavLink to="/misRutinas">Mis Rutinas</NavLink></li>
        <li><NavLink to="/guiaEjercicios">Guia</NavLink></li>
        {/* <li><NavLink to="/principal">Inicio</NavLink></li> */}
          
        </ul>

        {/* <ul>
        <li><NavLink to="/">Salir</NavLink></li>
        </ul> */}
    </nav>
  )
}

export default Nav
