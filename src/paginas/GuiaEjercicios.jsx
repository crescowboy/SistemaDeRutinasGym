import React from 'react'
import Nav from '../Nav'

const GuiaEjercicios = () => {
  return (
    <>
    <div className='container-guiaRutina-padre'>
    <Nav></Nav>
    <h1>Guia</h1>

    <div className='container-card'>
      <div className="card">
        <h3>ganar musculo</h3>
        <button>Ver mas</button>
      </div>
      <div className="card">
      <h3>Perder garsa</h3>
      <button>Ver mas</button>
      </div>
      <div className="card">
      <h3>Ganar Resistencia</h3>
      <button>Ver mas</button>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default GuiaEjercicios
