import React, { useState } from 'react'
import { Contexto } from './Contexto';

const Provider = ({children}) => {

  const [cancelarNombreRutina,setCancelarNombreRutina] = useState(false);
  const [agregarEjercicio, setAgregarEjercicio] = useState(false)
  const [misRutinas,setMisRutinas] = useState(["1","2","3"])
  return (
    <Contexto.Provider value={{
      cancelarNombreRutina,
      setCancelarNombreRutina,
      agregarEjercicio,
      setAgregarEjercicio,
      misRutinas,
      setMisRutinas
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
