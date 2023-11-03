import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegistrarMarcas from '../paginas/RegistrarMarcas'
import RegistrarRutina from '../paginas/RegistrarRutina'
import MisRutinas from '../paginas/MisRutinas'
import GuiaEjercicios from '../paginas/GuiaEjercicios'

const Router2 = () => {
  return (
    <>
    <Routes>
    <Route path='/registrarPr' element={<RegistrarMarcas></RegistrarMarcas>}></Route>
        <Route path="/registrarRutinas" element={<RegistrarRutina></RegistrarRutina>}></Route>
        <Route path="/misRutinas" element={<MisRutinas></MisRutinas>}></Route>
        <Route path="/guiaEjercicios" element={<GuiaEjercicios></GuiaEjercicios>}></Route>
        <Route path='/' element={<Navigate to="/registrarPr"></Navigate>}></Route>

    </Routes>
    </>
  )
}

export default Router2
