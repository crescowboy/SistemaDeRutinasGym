import React from 'react'
import { useForm } from 'react-hook-form'
import Pr from './Pr';



const RegistrarMarcas = () => {
  const {register,handleSubmit} = useForm();

  const obtenerValores =(data)=>{
    console.table(data)
  }
  return (
    <>

      <form onSubmit={handleSubmit(obtenerValores)}>

      

      <div className='container-marcas'>
        <div className='content-marcas'>
        <h1>Marcas registradas:</h1>
        <div className='input-marcas'>
        <label htmlFor="banca">Press Banca:</label>
        <input type="text" id='banca' 
        {...register("banca")}
        />
        <span className='kg'>kg</span> 
        </div>
        <div className='input-marcas'>
        <label htmlFor="sentadilla">Sentadilla:</label>
        <input type="text" id='sentadilla'
        {...register("sentadilla")}
        />
        <span className='kg'>kg</span> 
        </div>
        <div className='input-marcas'>
        <label htmlFor="pesoMuerto">Peso muerto:</label>
        <input type="text" id='pesoMuerto'
        {...register("pesoMuerto")}
        />
        <span className='kg'>kg</span> 
        </div>

        <div className='boton-marcas'>
          <input type="submit" />
        </div>
        </div>
      </div>

      </form>

     
     
      
    </>
  )
}

export default RegistrarMarcas
