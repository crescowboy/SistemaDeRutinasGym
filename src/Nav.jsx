import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Contexto } from './context/Contexto';


const Nav = () => {

  const navegacion = useNavigate();
  const {deslogearme} = useContext(Contexto);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  const logout = ()=>{
    navegacion('/home',{replace:true})
    deslogearme()
  }

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/registrarPr">Registrar Pr</NavLink></li>
        <li><NavLink to="/registrarRutinas">Registrar rutinas</NavLink></li>   
        <li><NavLink to="/misRutinas">Mis Rutinas</NavLink></li>
        <li><NavLink to="/guiaEjercicios">Guia</NavLink></li>
          
        
        <li> <button onClick={logout}>Salir</button></li> 
        
        </ul>

        
    </nav>
  )
}

export default Nav
