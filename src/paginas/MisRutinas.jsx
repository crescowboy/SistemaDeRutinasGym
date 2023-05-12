import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const {misRutinas,setMisRutinas} = useContext(Contexto);
  return (
    <>
        <Nav></Nav>
        <h1>Mis rutinas: </h1>
        {misRutinas.map((item,idex)=>(
          <div>{item}</div>
        ))}
    </>
  )
}

export default MisRutinas
