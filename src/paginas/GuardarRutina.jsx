import React from 'react'
import { useForm } from 'react-hook-form'

const GuardarRutina = () => {

    const {register,handleSubmit,reset} = useForm();

    const obtenerValores =(data)=>{
        console.table(data)
        reset()
    }

  return (
    <>
        <div className='tabla-nueva-rutina'>      
        <form onSubmit={handleSubmit(obtenerValores)}>
            <label htmlFor="nombre">Nombre de rutina: </label>
            <input type="text" id='nombre'
            {
                ...register('nombre')
            }/>
            <div className='botones-nueva-rutina'>
            <button className='boton-rutinas' type='submit'>Guardar</button>
            <button className='boton-rutinas' type='button'>Cancelar</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default GuardarRutina
