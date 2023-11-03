import React, { useReducer, useState } from 'react'
import { Contexto } from './Contexto';
import miReducer from './miReducer';
import types from './types';


const init = ()=>{
  const valor = localStorage.getItem("estado");
  return {
    estado:!!valor
  }
}

const Provider = ({children}) => {

  const [cancelarNombreRutina,setCancelarNombreRutina] = useState(false);
  const [agregarEjercicio, setAgregarEjercicio] = useState(false)
  const [misRutinas,setMisRutinas] = useState([])
  const [nombreRutina,setNombreRutina] = useState([]);
  const [rutinaGuardada,setRutinaGuardada] = useState(false);
  const [valores,setValores] = useState([]);
  const [estado,setEstado] = useState(false);
  const [logeado,dispatch] = useReducer(miReducer,{},init)
  
  const logearme =()=>{
    const action={
      type:types.login
    }
    localStorage.setItem('estado',true)
    dispatch(action)
  }

  const deslogearme =()=>{
    const action={
      type:types.logout
    }
    localStorage.removeItem('estado',true)
    dispatch(action)
  }
  return (
    <Contexto.Provider value={{
      cancelarNombreRutina,
      setCancelarNombreRutina,
      agregarEjercicio,
      setAgregarEjercicio,
      misRutinas,
      setMisRutinas,
      nombreRutina,
      setNombreRutina,
      rutinaGuardada,
      setRutinaGuardada,
      valores,
      setValores,
      estado,
      setEstado,
      ...logeado,
      logearme,
      deslogearme
      // objetoMisRutinas,
      // setObjetoMisRutinas
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
