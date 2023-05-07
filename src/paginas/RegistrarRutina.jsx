import React, { useState } from 'react'
import Nav from '../Nav'
import { useForm } from 'react-hook-form';

const RegistrarRutina = () => {
    const {register,handleSubmit,reset} = useForm();
    const [nuevaRutina, setNuevaRutina] = useState(false);
    const [rutinaCreada, setRutinaCresda] = useState(false);
    // const [enviado, setEnviado] = useState(false);

    const obtenerValores=(data)=>{
        console.table(data)
        reset();
    }

    const crearRutina=()=>{

        setNuevaRutina(true)
    }

    const cancelarRutina=()=>{
        if (nuevaRutina) {
            setNuevaRutina(false);
          }
        
    }

  return (
    <>
    <div className='Pr-padre'>
    <Nav></Nav>


        <div className='container-rutinas'>
        <h1>Rutinas:</h1>
        <button className='boton-rutinas' onClick={crearRutina}>Crear Rutina</button>
        </div>

        {
           nuevaRutina
           ? 
           <div className='tabla-nueva-rutina'>

            <form onSubmit={handleSubmit(obtenerValores)}>

                    <label htmlFor="ejercicio">Ejercico:</label>
            
                     <input type="text" id='ejercicio'
                    {
                        ...register('ejercicio')
                    } />
                
                <label htmlFor="series">Series:</label>
                 <input type="text" id='series' 
                    {
                        ...register('series')
                    } />
                
                <label htmlFor="repeticiones">Repeticiones:</label>
                <input type="text" id='repeticiones' 
                    {
                        ...register('repeticiones')
                    } />
             
            <div className='botones-nueva-rutina'>
            <button type='submit' className='boton-rutinas' >Guardar</button>
            <button type='button' className='boton-rutinas' onClick={cancelarRutina}>Cancelar</button>
            </div>

            </form>
           </div>
           :null 
        }
    </div>
    </>
  )

}

export default RegistrarRutina
