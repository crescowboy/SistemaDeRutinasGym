import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const {misRutinas,setMisRutinas} = useContext(Contexto);
  const titulos = ["Ejercicio", "Series", "Repeticiones"]
  return (
    <>
        <Nav></Nav>
        <h1>Mis rutinas: </h1>
      {misRutinas.map((item, index) => (
        <div className='tabla-nueva-rutina' key={index}>
          <h4>{titulos[index % titulos.length]}: {item}</h4>
          {/* <ul>
            <li>{item}</li>
          </ul> */}
        </div>
        ))}
    </>
  )
}

export default MisRutinas
