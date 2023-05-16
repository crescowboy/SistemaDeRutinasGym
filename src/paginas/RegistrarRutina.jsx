import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Nav'
import { useForm } from 'react-hook-form';
import GuardarRutina from './GuardarRutina';
import {Contexto} from '../context/Contexto';

const RegistrarRutina = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm();
    const {cancelarNombreRutina,setCancelarNombreRutina,
            agregarEjercicio, setAgregarEjercicio} = useContext(Contexto);
    const {misRutinas,setMisRutinas,nombreRutina,setNombreRutina} = useContext(Contexto);
    const [nuevaRutina, setNuevaRutina] = useState(false);
    const [rutinaCreada, setRutinaCresda] = useState(false);
    const [nombreRutinaMostrar, setNombreRutinaMostrar] = useState(false);

    useEffect(() => {
      setAgregarEjercicio(false); // Restablecer agregarEjercicio a false cuando el componente se monta o cambia la ubicación del "nav"
    }, []);

    const obtenerValores=(data)=>{
        console.table(data)
        const nombreRutinaActual = nombreRutina[nombreRutina.length - 1]; // Obtener el último objeto de nombreRutina
  const nombreRutinaSeleccionado = nombreRutinaActual.nombre; // Acceder a la propiedad deseada

  setMisRutinas([
    ...misRutinas,
    {
      nombre: nombreRutinaSeleccionado,
      ejercicio: data.ejercicio,
      series: data.series,
      repeticiones: data.repeticiones
    }
  ]);

        console.log(misRutinas)
        reset();
    }

    const crearRutina=()=>{
        setNombreRutinaMostrar(true)
        setCancelarNombreRutina(true)
    }

    const cancelarRutina=()=>{
        if (agregarEjercicio) {
            setAgregarEjercicio(false);
          }
        reset()
    }

  return (
    <>
    <div className='Pr-padre'>
    <Nav></Nav>

    
<div className='Registrar-rutinas-padre'>
        <div className='container-rutinas'>
        <h1>Rutinas:</h1>
        <button className='boton-rutinas' onClick={crearRutina}>Crear Rutina</button>
        </div>


        {
           nombreRutinaMostrar === true
           ?
           <GuardarRutina></GuardarRutina>
           :
           null 
        }

        {
           agregarEjercicio===true
           ? 
           <div className='tabla-nueva-rutina'>

            <form onSubmit={handleSubmit(obtenerValores)}>

                    <label htmlFor="ejercicio">Ejercico:</label>
            
                     <input
        type="text"
        id="ejercicio"
        {...register('ejercicio', {
          required: 'Este campo es requerido',
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: 'Este campo solo permite letras y espacios',
          },
        })}
      />
      {errors.ejercicio && <div className='error'>{errors.ejercicio.message}</div>}
                
      <label htmlFor="repeticiones">Series:</label>
                <input type="number" id='series' 
                    {
                        ...register('series',
                        {
                          required: 'Este campo es requerido'
                        })
                    } />

                  {errors.series && <div className='error'>{errors.series.message}</div>}
                
                <label htmlFor="repeticiones">Repeticiones:</label>
                <input type="number" id='repeticiones' 
                    {
                        ...register('repeticiones',
                        {
                          required: 'Este campo es requerido'
                        })
                    } />
                  {errors.repeticiones && <div className='error'>{errors.repeticiones.message}</div>}
             
            <div className='botones-nueva-rutina'>
            <button type='submit' className='boton-rutinas' >Guardar</button>
            <button type='button' className='boton-rutinas' onClick={cancelarRutina}>Cancelar</button>
            </div>

            </form>
           </div>
           :null 
        }
    </div>
    </div>
    </>
  )

}

export default RegistrarRutina
