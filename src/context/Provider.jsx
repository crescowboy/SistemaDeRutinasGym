import React, { useState } from 'react'
import { Contexto } from './Contexto';

const Provider = ({children}) => {

  const [cancelarNombreRutina,setCancelarNombreRutina] = useState(false);
  const [agregarEjercicio, setAgregarEjercicio] = useState(false)

  return (
    <Contexto.Provider value={{
      cancelarNombreRutina,
      setCancelarNombreRutina,
      agregarEjercicio,
      setAgregarEjercicio}}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
