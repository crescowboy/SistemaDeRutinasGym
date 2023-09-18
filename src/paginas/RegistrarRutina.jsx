import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Nav';
// import { useForm } from 'react-hook-form';
// import GuardarRutina from './GuardarRutina';
import { Contexto } from '../context/Contexto';

const RegistrarRutina = () => {
  const { misRutinas, setMisRutinas } = useContext(Contexto);
  const [nombreRutina, setNombreRutina] = useState('');
  const [ejercicios, setEjercicios] = useState([{ ejercicio: '', series: '', repeticiones: '' }]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Recuperar las rutinas almacenadas en localStorage al cargar la aplicación
    const storedRutinas = localStorage.getItem('misRutinas');
    if (storedRutinas) {
      setMisRutinas(JSON.parse(storedRutinas));
    }
  }, []);

  useEffect(() => {
    // Almacenar las rutinas en localStorage cuando se actualicen
    localStorage.setItem('misRutinas', JSON.stringify(misRutinas));
  }, [misRutinas]);

 

  const handleChangeNombreRutina = (e) => {
    setNombreRutina(e.target.value);
  };

  const handleChangeEjercicios = (index, e) => {
    const { name, value } = e.target;
    const list = [...ejercicios];
    list[index][name] = value;
    setEjercicios(list);
  };

  const handleAddEjercicio = () => {
    setEjercicios([...ejercicios, { ejercicio: '', series: '', repeticiones: '' }]);
  };

  const handleRemoveEjercicio = (index) => {
    const list = [...ejercicios];
    list.splice(index, 1);
    setEjercicios(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombreRutina.trim()) {
      setError(true);
      return;
    }
    setMisRutinas([...misRutinas, { nombre: nombreRutina, ejercicios: ejercicios }]);
    setNombreRutina('');
    setEjercicios([{ ejercicio: '', series: '', repeticiones: '' }]);
    setError(false);
    
    toast.success('Rutina guardada', { autoClose: 2500 });
  };

  return (
    <>
      <div className="container-misRutinas-padre">
        <Nav />
        <div className="container-misRutinas-hijo">
          <h1>Registrar rutina</h1>
          <form onSubmit={handleSubmit}>
            <div className="tabla-Registrar-Rutina">
              <div className="input-nombre-rutina">
                <label htmlFor="nombreRutina">Nombre de la rutina:</label>
                <input
                  type="text"
                  id="nombreRutina"
                  name="nombreRutina"
                  required
                  value={nombreRutina}
                  onChange={handleChangeNombreRutina}
                />
                {error && <span className="error">Ingrese un nombre para la rutina</span>}
              </div>
              <div className=".tabla-misRutinas">
                <label htmlFor="ejercicios">Ejercicios</label>
                {ejercicios.map((ejercicio, index) => (
                  <div key={index} className="ejercicio">
                    <input
                      type="text"
                      name="ejercicio"
                      placeholder="Nombre del ejercicio"
                      required
                      value={ejercicio.ejercicio}
                      onChange={(e) => handleChangeEjercicios(index, e)}
                      pattern="[A-Za-z\s]+"
                      title="Ingresa solo caracteres de texto"
                    />
                    <input
                      type="number"
                      name="series"
                      placeholder="Series"
                      required
                      value={ejercicio.series}
                      onChange={(e) => handleChangeEjercicios(index, e)}
                    />
                    <input
                      type="number"
                      name="repeticiones"
                      placeholder="Repeticiones"
                      required
                      value={ejercicio.repeticiones}
                      onChange={(e) => handleChangeEjercicios(index, e)}
                    />
                    <button type="button" className="btn-eliminar" onClick={() => handleRemoveEjercicio(index)}>
                      Eliminar
                    </button>
                  </div>
                ))}
                <button type="button" className="btn-agregar" onClick={handleAddEjercicio}>
                  Agregar Ejercicio
                </button>
              </div>
              <button type="submit" className="btn-guardar">
                Guardar Rutina
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrarRutina;
