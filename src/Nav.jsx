import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Contexto } from './context/Contexto';


const Nav = () => {

  const navegacion = useNavigate();
  const {deslogearme} = useContext(Contexto);


  const logout = ()=>{
    navegacion('/Home',{replace:true})
    deslogearme()
  }

  return (
    <nav className='navbar'>
        <ul>
          
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/registrarPr">Registrar Pr</NavLink></li>
        <li><NavLink to="/registrarRutinas">Registrar runinas</NavLink></li>   
        <li><NavLink to="/misRutinas">Mis Rutinas</NavLink></li>
        <li><NavLink to="/guiaEjercicios">Guia</NavLink></li>
        {/* <li><NavLink to="/prueba">prueba</NavLink></li> */}
        {/* <li><NavLink to="/principal">Inicio</NavLink></li> */}
          
        </ul>

        <ul>
        <button onClick={logout}>Salir</button> 
        </ul>
    </nav>
  )
}

export default Nav
