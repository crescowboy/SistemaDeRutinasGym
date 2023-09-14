import React, { useContext, useState,useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { pr } from '../data/datos';
import Swal from 'sweetalert2';
import Nav from '../Nav';
import { Contexto } from '../context/Contexto';






const RegistrarMarcas = () => {
  const {register,handleSubmit,formState:{errors}, reset} = useForm();
  const {valores,setValores,estado,setEstado} = useContext(Contexto);
  // const miInputRef = useRef();
  // const miInputRefBanca = useRef(null); // Referencia para el input de "Press Banca"
  // const miInputRefSentadilla = useRef(null);
  // const miInputRefPeso = useRef(null);
  
  
  

  useEffect(() => {
    // Recuperar las rutinas almacenadas en localStorage al cargar la aplicación
    const storedRutinas = localStorage.getItem('valores');
    if (storedRutinas) {
      setValores(JSON.parse(storedRutinas));
    }
  }, []);

  useEffect(() => {
    // Almacenar las rutinas en localStorage cuando se actualicen
    localStorage.setItem('valores', JSON.stringify(valores));
  }, [valores]);

  

  const obtenerValores =(data)=>{
    // console.table(data);

  const campo = Object.keys(data)[0];
  const campo2 = Object.keys(data)[1];
  const campo3 = Object.keys(data)[2];
  const valor = data[campo];
  const valor2 = data[campo2];
  const valor3 = data[campo3];

  const valorExistente = valores.find((v) => v.hasOwnProperty(campo));

  if (valorExistente) {
    const nuevosValores = valores.map((v) => {
      if (v === valorExistente) {
        const actualizacion = {};
        if (valor) {
          actualizacion[campo] = valor;
        }
        if (valor2) {
          actualizacion[campo2] = valor2;
        }
        if (valor3) {
          actualizacion[campo3] = valor3;
        }
        return { ...v, ...actualizacion };
      }

      return v;
    });
    setValores(nuevosValores);
  } else {
    setValores([...valores, data]);
  }

  if (valores.length > 0) {
    setEstado(true);
  }

  
  reset();
  }

  const eliminarMarcas = (index) =>{
    Swal.fire({
      title: 'Confirmacion',
      text: 'Estas seguro de eliminar los Prs?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result)=>{
      if (result.isConfirmed) {
        const updatedValores = [...valores];
        updatedValores.splice(index, 1);
        setValores(updatedValores);
        localStorage.setItem('valores', JSON.stringify(updatedValores));
        reset();

        Swal.fire({
          text: 'Eliminacion realizada con exito',
          icon: 'success',
          timer: 1500,
        });

      }
      
    })
    
  }

  // const selectMarca = (ref) => {
  // //   console.log('Función selectMarca ejecutada');
  // //   if (ref && ref.current) {
  // //     ref.current.focus();
  // //     // register("banca", { min: 1 });
  // //   }
  // // };

  
  return (
    <>

    <div className='Pr-padre'>
      
    <Nav></Nav>

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
          <input  type="number" id='sentadilla' 
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
          <input  type="number" id='pesoMuerto' 
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
          <button type='button' onClick={eliminarMarcas}>Eliminar valores</button>
        </div>
        </div>
      </div>

      </form>

     
      {
        valores.length > 0
      // estado === false
      ?


      valores.map((valor,index)=>(
        <div className='mostrarPr' key={index}>
          
          <div className='ejercicioPr1'>
            <div className='ejercicioPr' >
              <div className='' >{valor.banca
                ? valor.banca
                : <span>---</span>
                }
                </div>
                <div>kg</div>
                <div>Press Banca</div>
            </div>
          </div>

          <div className='ejercicioPr1'>
            <div className='ejercicioPr' >
                <div className='' >{valor.sentadilla
                ? valor.sentadilla
                :<span>---</span>
                }
                </div>
                <div>kg</div>
                <div>Sentadilla</div>
            </div>
          </div>

          <div className='ejercicioPr1' >
            <div className='ejercicioPr' >
                <div className='' >{valor.pesoMuerto 
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


        
        :

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
            
          }
          </div>
    </>
  )
}

export default RegistrarMarcas
