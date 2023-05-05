import React, { useState } from 'react'
import { useForm } from 'react-hook-form'




const RegistrarMarcas = () => {
  const {register,handleSubmit,formState:{errors}, reset} = useForm();
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
  <input 
    type="number" 
    id="banca" 
    min={1}
    max={999}
    {...register("banca")}
    onInput={(e) => {
      e.target.value = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3)
    }}
  />
  <span className='kg'>kg</span> 
</div>

{errors.banca?.type === "min" &&
  <div className='error'>Como mínimo debe ser 1</div>
}




        <div className='input-marcas'>
          <label htmlFor="sentadilla">Sentadilla:</label>
          <input type="number" id='sentadilla' maxLength="3"
          {...register("sentadilla",
          {
            min: 1
          }
          )}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3)
          }}
          />
          <span className='kg'>kg</span> 
        </div>

        {errors.sentadilla?.type === "min" &&
          <div className='error'>Como minimo debe ser 1</div>
        }

        <div className='input-marcas'>
          <label htmlFor="pesoMuerto">Peso muerto:</label>
          <input type="number" id='pesoMuerto' maxLength="3"
          {...register("pesoMuerto",
          {
            min: 1
          }
          )}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3)
          }}
          />
          <span className='kg'>kg</span> 
        </div>

        {errors.pesoMuerto?.type === "min" &&
          <div className='error'>Como minimo debe ser 1</div>
        }

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
