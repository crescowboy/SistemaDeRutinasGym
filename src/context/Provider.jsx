import React, { useReducer, useState } from 'react'
import { Contexto } from './Contexto';
import miReducer from './miReducer';


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
  
  // const [objetoMisRutinas,setObjetoMisRutinas] = useState([
  //   {
  //     ejercicio: "",
  //     series: "",
  //     Repeticiones: ""
  //   }
  // ]);
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
      ...logeado
      // objetoMisRutinas,
      // setObjetoMisRutinas
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider
