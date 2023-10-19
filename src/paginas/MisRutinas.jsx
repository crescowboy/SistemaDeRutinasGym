import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav';
import { Contexto } from '../context/Contexto';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'



const MisRutinas = () => {
  const { misRutinas, setMisRutinas } = useContext(Contexto);
  const [buscador, setBuscador] = useState('');
  const [resultadoEncontrado, setResultadoEncontrado] = useState([]);
  const [rutinaIndex, setRutinaIndex] = useState(null);
  const [rutinaEditada, setRutinaEditada] = useState({nombre: '', ejercicios: []});
  const [fuenteDeDatos, setFuenteDeDatos] = useState('misRutinas'); // Usamos esto para rastrear de dónde proviene la rutina editada

  useEffect(() => {
    // Recuperar las rutinas almacenadas en localStorage al cargar la aplicación
    const storedRutinas = localStorage.getItem('misRutinas');
    // const storeRutinaEditada = localStorage.getItem('rutinaEditada');
    if (storedRutinas) {
      setMisRutinas(JSON.parse(storedRutinas));
    }
    // if (storeRutinaEditada) {
    //   setMisRutinas(JSON.parse(storeRutinaEditada));
    // }
  }, []);
  

  const handleEliminarRutina = (id) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar la rutina?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRutinas = misRutinas.filter((rutina) => rutina.ejercicios[0].id !== id);
        setMisRutinas(updatedRutinas);
        localStorage.setItem('misRutinas', JSON.stringify(updatedRutinas));
      }
      if (result.isConfirmed) {
        Swal.fire({
          text: 'La rutina se ha eliminado',
          icon: 'success',
          timer: 1500,
        });
      }
    });
  };


  const EditarRutina = (id) => {
    
    console.log('Editar rutina con ID:', id);
    // console.log(misRutinas)
    if (resultadoEncontrado.length > 0) {
      // Si el resultadoEncontrado no está vacío, busca la rutina en resultadoEncontrado
      const rutinaSeleccionada = resultadoEncontrado.find((rutina) => rutina.ejercicios[0].id === id);
      console.log('Editar rutina con ID:', id);
      
      if (rutinaSeleccionada) {
        const rutinaEditadaClone = JSON.parse(JSON.stringify(rutinaSeleccionada));
        setRutinaIndex(id);
        setRutinaEditada(rutinaEditadaClone);
        setFuenteDeDatos('resultadoEncontrado');
      } else {
        console.error("Rutina no encontrada en resultadoEncontrado");
      }
    } else {
      // Si resultadoEncontrado está vacío, busca la rutina en misRutinas
      const rutinaSeleccionada = misRutinas.find((rutina) => rutina.ejercicios[0].id === id);
      if (rutinaSeleccionada) {
        const rutinaEditadaClone = JSON.parse(JSON.stringify(rutinaSeleccionada));
        setRutinaIndex(id);
        setRutinaEditada(rutinaEditadaClone);
        setFuenteDeDatos('misRutinas');
      } else {
        console.error("Rutina no encontrada en misRutinas");
      }
    }
  };

  const guardarEdicionRutina = () => {
    const rutinasActualizadas = [...misRutinas];
  
    if (fuenteDeDatos === 'misRutinas') {
      const index = rutinasActualizadas.findIndex((rutina) => rutina.ejercicios[0].id === rutinaIndex);
      if (index !== -1) {
        // Actualizar los ejercicios con sus IDs únicos
        rutinaEditada.ejercicios = rutinaEditada.ejercicios.map((ejercicio, i) => ({
          id: i + 1, // Asignamos un nuevo ID único basado en el índice
          ejercicio: ejercicio.ejercicio,
          series: ejercicio.series,
          repeticiones: ejercicio.repeticiones,
        }));
        // Asignar el mismo ID a la rutina editada
        rutinaEditada.id = rutinaIndex;
        rutinasActualizadas[index] = rutinaEditada;
      }
    } else if (fuenteDeDatos === 'resultadoEncontrado') {
      const index = resultadoEncontrado.findIndex((rutina) => rutina.ejercicios[0].id === rutinaIndex);
      if (index !== -1) {
        // Actualizar los ejercicios con sus IDs únicos
        rutinaEditada.ejercicios = rutinaEditada.ejercicios.map((ejercicio, i) => ({
          id: i + 1, // Asignamos un nuevo ID único basado en el índice
          ejercicio: ejercicio.ejercicio,
          series: ejercicio.series,
          repeticiones: ejercicio.repeticiones,
        }));
        // Asignar el mismo ID a la rutina editada
        rutinaEditada.id = rutinaIndex;
        resultadoEncontrado[index] = rutinaEditada;
        const updatedMisRutinas = [...misRutinas];
        const originalIndex = updatedMisRutinas.findIndex((rutina) => rutina.ejercicios[0].id === rutinaIndex);
        if (originalIndex !== -1) {
          updatedMisRutinas[originalIndex] = rutinaEditada;
        }
        setMisRutinas(updatedMisRutinas);
      }
    }
  
    // Actualizar el estado global
    setMisRutinas(rutinasActualizadas);
  
    // Actualizar el almacenamiento local
    localStorage.setItem('misRutinas', JSON.stringify(rutinasActualizadas));
  
    // Limpiar los valores de edición
    setRutinaEditada({ nombre: '', ejercicios: [] }); // Reiniciar la rutina editada
    setRutinaIndex(null);
    setFuenteDeDatos(null); // Reiniciar la fuente de datos
  };
  

  //Buscar rutina

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
                  <button className="boton-eliminar" onClick={() => handleEliminarRutina(rutina.ejercicios[0].id)}>
                    Eliminar
                  </button>
                  <button className='boton-editar' onClick={()=> EditarRutina(rutina.ejercicios[0].id)}>
                    Editar
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
                  <button className="boton-eliminar" onClick={() => handleEliminarRutina(rutina.ejercicios[0].id)}>
                    Eliminar
                  </button>
                  <button className='boton-editar' onClick={()=> EditarRutina(rutina.ejercicios[0].id)}>
                    Editar
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="msg-rutinas">No hay rutinas disponibles</p>
          )}
        </div>

        <Modal
        is isOpen={rutinaIndex !== null}
        onRequestClose={()=> setRutinaIndex(null)}
        contentLabel = "Editar Rutina"
        className="modal-editar-rutina"
        overlayClassName="modal-overlay"
        >
          <div className='padre-ModalMisRutinas'>
          <h2>Editar Rutina</h2>
          <input className='input-editar-rutina'
            type='text'
            value={rutinaEditada.nombre}
            onChange={(e) => setRutinaEditada({...rutinaEditada, nombre: e.target.value})}
          />
          
          <table className='tabla-ModalMisRutinas'>
            <thead>
              <tr>
                <th>Ejercicios</th>
                <th>Series</th>
                <th>Repeticiones</th>
              </tr>
            </thead>
            <tbody>
              {rutinaEditada.ejercicios.map((ejercicio, i)=>(
                <tr key={i}>
                  <td>
                  <input
                    type='text'
                    value={ejercicio.ejercicio}
                    onChange={(e) => {
                      const ejerciciosActualizados = [...rutinaEditada.ejercicios];
                      ejerciciosActualizados[i].ejercicio = e.target.value;
                      setRutinaEditada({...rutinaEditada, ejercicios: ejerciciosActualizados})
                    }}
                  />
                  </td>
                  <td>
                  <input
                    type='text'
                    value={ejercicio.series}
                    onChange={(e) => {
                      const ejerciciosActualizados = [...rutinaEditada.ejercicios];
                      ejerciciosActualizados[i].series = e.target.value;
                      setRutinaEditada({...rutinaEditada, ejercicios: ejerciciosActualizados})
                    }}
                  />
                  </td>
                  <td>
                    <input
                      type='text'
                      value={ejercicio.repeticiones}
                      onChange={(e) => {
                        const ejerciciosActualizados = [...rutinaEditada.ejercicios];
                        ejerciciosActualizados[i].repeticiones = e.target.value;
                        setRutinaEditada({...rutinaEditada, ejercicios: ejerciciosActualizados})
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* <div className='buttons-ModalMisRutinas'> */}
          <button className='boton-guardar' onClick={guardarEdicionRutina}>Guardar</button>
          <button className='boton-eliminar' onClick={() => setRutinaIndex(null)}>Cancelar</button>
          {/* </div> */}
          </div>
        </Modal>


        <footer className="footer">
        <p>© 2023 Wellington Crespo. Todos los derechos reservados.</p>
      </footer>
      </div>
    </>
  );
};

export default MisRutinas;
