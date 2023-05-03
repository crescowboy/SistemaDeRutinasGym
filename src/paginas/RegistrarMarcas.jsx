import React, { useState } from 'react'
import { useForm } from 'react-hook-form'




const RegistrarMarcas = () => {
  const {register,handleSubmit,reset} = useForm();
  const [valores,setValores] = useState([]);
  const [estado,setEstado] = useState(false);


  const obtenerValores =(data)=>{
    console.table(data)
    setValores([ data])
    setEstado(true);
    reset();
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
          <input type="submit" value="Registrar"/>
        </div>
        </div>
      </div>

      </form>

     
      {
      estado === false
      ?

      <div className='mostrarPr' >
            
            <div className='ejercicioPr1'>
              <div className='ejercicioPr'>
                <div className=''><span>---</span>
                  
                  </div>
                  <div>kg</div>
                  <div>Press Banca</div>
              </div>
            </div>

            <div className='ejercicioPr1'>
              <div className='ejercicioPr'>
                  <div className=''><span>---</span>
                  
                  </div>
                  <div>kg</div>
                  <div>Sentadilla</div>
              </div>
            </div>

            <div className='ejercicioPr1'>
              <div className='ejercicioPr'>
                  <div className=''>
                  <span>---</span>
                  </div>
                  <div>kg</div>
                  <div>Peso muerto</div>
              </div>
            </div>
            
            
          </div>



       
        
        
        :
        valores.map((valor,index)=>(
          <div className='mostrarPr' key={index}>
            
            <div className='ejercicioPr1'>
              <div className='ejercicioPr'>
                <div className=''>{valor.banca
                  ? valor.banca
                  : <span>---</span>
                  }
                  </div>
                  <div>kg</div>
                  <div>Press Banca</div>
              </div>
            </div>

            <div className='ejercicioPr1'>
              <div className='ejercicioPr'>
                  <div className=''>{valor.sentadilla
                  ? valor.sentadilla
                  :<span>---</span>
                  }
                  </div>
                  <div>kg</div>
                  <div>Sentadilla</div>
              </div>
            </div>

            <div className='ejercicioPr1'>
              <div className='ejercicioPr'>
                  <div className=''>{valor.pesoMuerto 
                  ? valor.pesoMuerto
                  :
                  <span>---</span>}
                  </div>
                  <div>kg</div>
                  <div>Peso muerto</div>
              </div>
            </div>
            
            
          </div>
          
        ))
      }
      
    </>
  )
}

export default RegistrarMarcas
