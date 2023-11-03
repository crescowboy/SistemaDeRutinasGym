import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../paginas/Home'
import RegistrarMarcas from '../paginas/RegistrarMarcas'
import MisRutinas from '../paginas/MisRutinas'
import Router2 from './Router2'
import RutasPublicas from './RutasPublicas'
import RutasPrivadas from './RutasPrivadas'

const Router1 = () => {
  return (
    <Routes>
        <Route path='/' element={
          <RutasPublicas>
        <Home></Home>
        </RutasPublicas>
        }></Route>
        <Route path='/home' element={
          <RutasPublicas>
        <Home></Home>
        </RutasPublicas>
        }></Route>
        <Route path='/*' element={
          <RutasPrivadas>
        <Router2></Router2>
        </RutasPrivadas>
        }></Route>
    </Routes>
  )
}

export default Router1
