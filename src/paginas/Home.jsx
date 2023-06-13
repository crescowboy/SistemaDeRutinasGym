import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navegacion = useNavigate();
  return (
    <>
    <div className='container-empezar'>
    <div className='empezar'>
      <h1>Empieza a conseguir resultados!</h1>
      <div className='login'>
        <h3>Login</h3>
        <label htmlFor="user"></label>
        <input type="text" name='user' />
        <label htmlFor="password"></label>
        <input type="text" name='password'/>
        <button type='submit'>Entrar</button>
      </div>
      
      <button className='boton-empezar' onClick={()=> navegacion("/registrarPr")}>Empezar</button> 
    </div>
    </div>
    
    </>
  )
}

export default Home
