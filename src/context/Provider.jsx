import React, { useState } from 'react'
import { Contexto } from './Contexto';

const Provider = ({children}) => {

  const [cancelarNombreRutina,setCancelarNombreRutina] = useState(true);

  return (
    <Contexto.Provider value={{
      cancelarNombreRutina,
      setCancelarNombreRutina}}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
