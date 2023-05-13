import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const {misRutinas,setMisRutinas} = useContext(Contexto);
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
          <h4>{titulos[index % titulos.length]}: {item}</h4>
          {/* <ul>
            <li>{item}</li>
          </ul> */}
        </div>
        ))}
        </div>
        </div>
        </div>
    </>
  )
}

export default MisRutinas
