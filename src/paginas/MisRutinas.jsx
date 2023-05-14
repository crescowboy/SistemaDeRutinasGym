import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const {misRutinas,setMisRutinas,objetoMisRutinas,setObjetoMisRutinas} = useContext(Contexto);
  
  const titulos = ["Ejercicio", "Series", "Repeticiones"]
  return (
    <>
    <div className='container-misRutinas-padre'>
        <Nav></Nav>
        <div className='container-misRutinas-hijo'>
        <h1>Mis rutinas: </h1>
        <div className='tabla-misRutinas'>
      {misRutinas.map((item, index) => (
        
        <div className='fila-misRutinas' key={index}>
          <li key={index}>
            Ejercicio: {item.ejercicio}, Series: {item.series}, Repeticiones: {item.repeticiones}
          </li>
          <button>eliminar</button>
          <button>Editar</button>
        </div>
        ))}
        </div>
        </div>
        </div>
    </>
  )
}

export default MisRutinas
