import React, { useContext } from 'react'
import { Contexto } from '../context/Contexto'

const BotonAgregarEjercicio = () => {

  const {rutinaGuardada,setRutinaGuardada} = useContext(Contexto);

    const agregarEjercicio =()=>{
        console.log("click")
        setRutinaGuardada(true)

    }

  return (
    <>
        <button type='button' className='boton-agrega-Ejercicio' onClick={agregarEjercicio}>Guardar</button>
    </>
  )
}

export default BotonAgregarEjercicio
