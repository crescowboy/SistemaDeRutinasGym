import React from 'react'
import { useForm } from 'react-hook-form'

const GuardarRutina = () => {

    const {register,handleSubmit,reset} = useForm();

    const obtenerValores =(data)=>{

    }

  return (
    <>
        <div className='tabla-nueva-rutina'>      
        <form onSubmit={handleSubmit(obtenerValores)}>
            <label htmlFor="nombre">Nombre de rutina: </label>
            <input type="text" id='nombre'/>
            <button className='boton-rutinas' type='submit'>Guardar</button>
        </form>
        </div>
    </>
  )
}

export default GuardarRutina
