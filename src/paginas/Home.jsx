import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navegacion = useNavigate();
  return (
    <>
    <div className='container-empezar'>
    <div className='empezar'>
      <h1>Empieza a conseguir resultados!</h1>
      <button className='boton-empezar' onClick={()=> navegacion("/registrarPr")}>Empezar</button> 
    </div>
    </div>
    
    </>
  )
}

export default Home
