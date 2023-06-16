import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav';
import { Contexto } from '../context/Contexto';
import { useState } from 'react';

const MisRutinas = () => {
  const { misRutinas, setMisRutinas } = useContext(Contexto);
  const [buscador, setBuscador] = useState('');
  const [resultadoEncontrado, setResultadoEncontrado] = useState([]);

  useEffect(() => {
    // Recuperar las rutinas almacenadas en localStorage al cargar la aplicación
    const storedRutinas = localStorage.getItem('misRutinas');
    if (storedRutinas) {
      setMisRutinas(JSON.parse(storedRutinas));
    }
  }, []);

  const handleEliminarRutina = (index) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar la rutina?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRutinas = [...misRutinas];
        updatedRutinas.splice(index, 1);
        setMisRutinas(updatedRutinas);
        localStorage.setItem('misRutinas', JSON.stringify(updatedRutinas));
        Swal.fire({
          text: 'La rutina se ha eliminado',
          icon: 'success',
          timer: 1500,
        });
      }
    });
  };

  const buscarRutina = (e) => {
    const rutinaBuscada = e.target.value;
    setBuscador(e.target.value);

    const rutinaEncontrada = misRutinas.filter((rutina) =>
      rutina.nombre.toLowerCase().includes(rutinaBuscada.toLowerCase())
    );

    setResultadoEncontrado(rutinaEncontrada);
  };

  return (
    <>
      <div className="container-misRutinas-padre">
        <Nav />
        <div className="container-misRutinas-hijo">
          <h1>Mis rutinas:</h1>

          <div className="buscarRutina">
            <div className="iconoBuscar">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type="text" value={buscador} placeholder='Buscar' onChange={buscarRutina} />
          </div>

          {resultadoEncontrado.length > 0 ? (
            <div className="tabla-misRutinas">
              {resultadoEncontrado.map((rutina, index) => (
                <div className="fila-misRutinas" key={index}>
                  <h2 className="nombre-rutina">{rutina.nombre}</h2>
                  <table className="tabla-ejercicios">
                    <thead>
                      <tr>
                        <th>Ejercicio</th>
                        <th>Series</th>
                        <th>Repeticiones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rutina.ejercicios.map((ejercicio, i) => (
                        <tr key={i}>
                          <td>{ejercicio.ejercicio}</td>
                          <td>{ejercicio.series}</td>
                          <td>{ejercicio.repeticiones}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="boton-eliminar" onClick={() => handleEliminarRutina(index)}>
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          ) : misRutinas.length > 0 ? (
            <div className="tabla-misRutinas">
              {misRutinas.map((rutina, index) => (
                <div className="fila-misRutinas" key={index}>
                  <h2 className="nombre-rutina">{rutina.nombre}</h2>
                  <table className="tabla-ejercicios">
                    <thead>
                      <tr>
                        <th>Ejercicio</th>
                        <th>Series</th>
                        <th>Repeticiones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rutina.ejercicios.map((ejercicio, i) => (
                        <tr key={i}>
                          <td>{ejercicio.ejercicio}</td>
                          <td>{ejercicio.series}</td>
                          <td>{ejercicio.repeticiones}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
        <footer className="footer">
        <p>© 2023 Wellington Crespo. Todos los derechos reservados.</p>
      </footer>
      </div>
    </>
  );
};

export default MisRutinas;
