import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Contexto } from '../context/Contexto';

const GuardarRutina = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { cancelarNombreRutina, setCancelarNombreRutina, agregarEjercicio, setAgregarEjercicio, misRutinas, setMisRutinas } = useContext(Contexto);
  const { nombreRutina, setNombreRutina } = useContext(Contexto);

  const cancelar = () => {
    setCancelarNombreRutina(false);
    setAgregarEjercicio(false);
    reset();
  };

  const obtenerValores = (data, index) => {
    console.table(data);
    setAgregarEjercicio(true);

    const objetoActualizado = { ...misRutinas[index], nombre: data.nombre };
    const misRutinasActualizadas = [...misRutinas];
    misRutinasActualizadas[index] = objetoActualizado;
    setMisRutinas(misRutinasActualizadas);

    // setMisRutinas([
    //   ...misRutinas,
    //   {
    //     nombre: data.ejercicio
    //   }
    // ]);
    reset();
  };

  const indice = 0;

  return (
    <>
      {cancelarNombreRutina === true ? (
        <div className='tabla-nueva-rutina'>
          <form onSubmit={handleSubmit((data) => obtenerValores(data, indice))}>
            <label htmlFor='nombre'>Nombre de rutina: </label>
            <input
              type='text'
              id='nombre'
              {...register('nombre', {
                required: 'Este campo es requerido'
              })}
            />
            {errors.nombre && <div className='error'>{errors.nombre.message}</div>}
            <div className='botones-nueva-rutina'>
              <button className='boton-rutinas' type='submit'>
                Guardar
              </button>
              <button className='boton-rutinas' type='button' onClick={cancelar}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default GuardarRutina;
