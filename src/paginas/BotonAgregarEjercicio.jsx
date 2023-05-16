import React from 'react'

const BotonAgregarEjercicio = () => {

    const agregarEjercicio =()=>{
        console.log("click")
    }

  return (
    <>
        <button type='button' className='boton-agrega-Ejercicio' onClick={agregarEjercicio}>Agregar Ejercico</button>
    </>
  )
}

export default BotonAgregarEjercicio
