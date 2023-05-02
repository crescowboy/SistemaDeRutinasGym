import React from 'react'

const RegistrarMarcas = () => {
  
  return (
    <>

      <form >

      

      <div className='container-marcas'>
        <div className='content-marcas'>
        <h1>Marcas registradas:</h1>
        <div className='input-marcas'>
        <label htmlFor="">Press Banca:</label>
        <input type="text" />
        <span className='kg'>kg</span> 
        </div>
        <div className='input-marcas'>
        <label htmlFor="">Sentadilla:</label>
        <input type="text" />
        <span className='kg'>kg</span> 
        </div>
        <div className='input-marcas'>
        <label htmlFor="">Peso muerto:</label>
        <input type="text" />
        <span className='kg'>kg</span> 
        </div>
        </div>
      </div>

      </form>
    </>
  )
}

export default RegistrarMarcas
