import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { pr } from '../data/datos';





const RegistrarMarcas = () => {
  const {register,handleSubmit,formState:{errors}, reset} = useForm();
  const [valores,setValores] = useState([]);
  const [estado,setEstado] = useState(false);


  const obtenerValores =(data)=>{
    console.table(data);

  const campo = Object.keys(data)[0];
  const campo2 = Object.keys(data)[1];
  const campo3 = Object.keys(data)[2];
  const valor = data[campo];
  const valor2 = data[campo2];
  const valor3 = data[campo3];

  const valorExistente = valores.find((v) => v.hasOwnProperty(campo));
  const valorExistente2 = valores.find((v) => v.hasOwnProperty(campo2));
  const valorExistente3 = valores.find((v) => v.hasOwnProperty(campo3));

  if (valorExistente) {
    const nuevosValores = valores.map((v) => {
      if (v === valorExistente) {
        return { ...v, [campo]: valor };
      }
      if (v === valorExistente2) {
        return { ...v, [campo2]: valor2 };
      }
      if (v === valorExistente3) {
        return { ...v, [campo3]: valor3 };
      }
      return v;
    });
    setValores(nuevosValores);
  } else {
    setValores([...valores, data]);
  }

  setEstado(true);
  reset();
  }
  return (
    <>

    <div className='Pr-padre'>

      <form onSubmit={handleSubmit(obtenerValores)}>

      

      <div className='container-marcas'>
        <div className='content-marcas'>
          <h1>Marcas registradas:</h1>
          <div className='input-marcas'>
  <label htmlFor="banca">Press Banca:</label>
  <input 
    type="number" 
    id="banca"
    {...register("banca",
    {
      min:1
    }
    )}
    onInput={(e) => {
      let newValue = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3);
            if (newValue === "0") {
              newValue = "";
            }
            e.target.value = newValue;
    }}
  />
  <span className='kg'>kg</span> 
</div>






        <div className='input-marcas'>
          <label htmlFor="sentadilla">Sentadilla:</label>
          <input type="number" id='sentadilla' 
          {...register("sentadilla",
          {
            min: 1
          }
          )}
          onInput={(e) => {
            let newValue = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3);
            if (newValue === "0") {
              newValue = "";
            }
            e.target.value = newValue;
          }}
          />
          <span className='kg'>kg</span> 
        </div>

       

        <div className='input-marcas'>
          <label htmlFor="pesoMuerto">Peso muerto:</label>
          <input type="number" id='pesoMuerto' 
          {...register("pesoMuerto",
          {
            min: 1
          }
          )}
          onInput={(e) => {
            let newValue = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3);
            if (newValue === "0") {
              newValue = "";
            }
            e.target.value = newValue;
          }}
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
      </div>
    </>
  )
}

export default RegistrarMarcas
