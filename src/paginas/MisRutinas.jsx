import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../context/Contexto'

const MisRutinas = () => {
  const { misRutinas,setMisRutinas } = useContext(Contexto);

  const handleEliminarRutina = (index) => {
    const updatedRutinas = [...misRutinas];
    updatedRutinas.splice(index, 1);
    setMisRutinas(updatedRutinas);
  };

  return (
    <>
      <div className="container-misRutinas-padre">
        <Nav />
        <div className="container-misRutinas-hijo">
          <h1>Mis rutinas:</h1>

          {misRutinas.length > 0 ? (
            <div className="tabla-misRutinas">
              {misRutinas.map((rutina, index) => (
                <div className="fila-misRutinas" key={index}>
                  <h2>{rutina.nombre}</h2>
                  {rutina.ejercicios.map((ejercicio, i) => (
                    <li key={i}>
                      Ejercicio: {ejercicio.ejercicio}, Series: {ejercicio.series}, Repeticiones: {ejercicio.repeticiones}
                    </li>
                  ))}
                  <button className="boton-eliminar" onClick={() => handleEliminarRutina(index)}>
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="msg-rutinas">No hay rutinas disponibles</p>
          )}
        </div>
      </div>
    </>
  );
};
export default MisRutinas