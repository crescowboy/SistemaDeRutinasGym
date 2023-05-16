import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const { misRutinas, setMisRutinas, objetoMisRutinas, setObjetoMisRutinas, nombreRutina, setNombreRutina,agregarEjercicio, setAgregarEjercicio } = useContext(Contexto);

  

  return (
    <>
      <div className='container-misRutinas-padre'>
        <Nav />
        <div className='container-misRutinas-hijo'>
          <h1>Mis rutinas: </h1>

          {misRutinas.length > 0 ? (
            <div className='tabla-misRutinas'>
              {misRutinas.map((rutina, index) => (
                <div className='fila-misRutinas' key={index}>
                  {rutina.ejercicio && rutina.nombre && (
                    <>
                      <h2>{rutina.nombre}</h2>
                      <li>
                        Ejercicio: {rutina.ejercicio}, Series: {rutina.series}, Repeticiones: {rutina.repeticiones}
                      </li>
                      <button className='boton-eliminar'>eliminar</button>
                      <button className='boton-editar'>agregar</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No hay rutinas disponibles</p>
          )}
        </div>
      </div>
    </>
  );
};
export default MisRutinas
