import React from 'react'
import Nav from '../Nav'
import gym1 from '../img/gym1.jpg'
import gym2 from '../img/gym2.jpg'
import gym3 from '../img/gym3.jpg'

const GuiaEjercicios = () => {
  return (
    <>
    <div className='container-guiaRutina-padre'>
    <Nav></Nav>
    <h1>Guia</h1>

    <div className='container-card'>
      <div className="card">
        <h3>ganar musculo</h3>
        <img className='img-card' src={gym1} alt="asd" />
        <button className='btn-ver'>Ver mas</button>
      </div>
      <div className="card">
      <h3>Perder garsa</h3>
      <img className='img-card' src={gym2} alt="" />
      <button className='btn-ver'>Ver mas</button>
      </div>
      <div className="card">
      <h3>Ganar Resistencia</h3>
      <img className='img-card' src={gym3} alt="" />
      <button className='btn-ver'>Ver mas</button>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default GuiaEjercicios
