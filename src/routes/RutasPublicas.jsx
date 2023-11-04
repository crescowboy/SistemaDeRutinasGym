import React, { useContext } from 'react'
import { Contexto } from '../context/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPublicas = ({children}) => {

    const {estado} = useContext(Contexto);
  return (!estado)
    ? children
    : <Navigate to='/registrarPr'></Navigate>
}

export default RutasPublicas
