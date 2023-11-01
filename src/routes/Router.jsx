import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../paginas/Home'
import RegistrarMarcas from '../paginas/RegistrarMarcas'
import MisRutinas from '../paginas/MisRutinas'
import Router2 from './Router2'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/*' element={<Router2></Router2>}></Route>
    </Routes>
  )
}

export default Router
