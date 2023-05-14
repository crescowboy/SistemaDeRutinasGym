import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const { misRutinas, setMisRutinas, objetoMisRutinas, setObjetoMisRutinas, nombreRutina, setNombreRutina } = useContext(Contexto);

  return (
    <>
      <div className='container-misRutinas-padre'>
        <Nav></Nav>
        <div className='container-misRutinas-hijo'>
          <h1>Mis rutinas: </h1>
          <div className='tabla-misRutinas'>
           
                
                 
                  {misRutinas.map((rutina,index)=>(
                    <div className="fila-misRutinas" key={index}>

                      {rutina.ejercicio &&(
                        <>
                        <h2>{rutina.nombre}</h2>
                        <li>
                          Ejercicio: {rutina.ejercicio}, Series: {rutina.series}, Repeticiones: {rutina.repeticiones}
                        </li>
                        <button>eliminar</button>
                        <button>Editar</button>
                        </>
                      )
                        
                      }
                      
                    </div>
                  ))
                    
                  }
                
             
          </div>
        </div>
      </div>
    </>
  )
}

export default MisRutinas
