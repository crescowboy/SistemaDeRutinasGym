import React, { useState } from 'react'
import { Contexto } from './Contexto';

const Provider = ({children}) => {

  const [cancelarNombreRutina,setCancelarNombreRutina] = useState(false);
  const [agregarEjercicio, setAgregarEjercicio] = useState(false)
  const [misRutinas,setMisRutinas] = useState([])
  const [objetoMisRutinas,setObjetoMisRutinas] = useState([
    {
      ejercicio: "",
      series: "",
      Repeticiones: ""
    }
  ]);
  return (
    <Contexto.Provider value={{
      cancelarNombreRutina,
      setCancelarNombreRutina,
      agregarEjercicio,
      setAgregarEjercicio,
      misRutinas,
      setMisRutinas,
      objetoMisRutinas,
      setObjetoMisRutinas
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
