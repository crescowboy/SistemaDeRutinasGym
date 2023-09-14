import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';

const Prueba_rf = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const miInputRefBanca = useRef(null);

  const selectMarca = (ref) => {
    console.log('Función selectMarca ejecutada');
    if (ref && ref.current) {
      ref.current.focus();
      register("banca", { min: 1 });
    }
  };
  

  return (
    <div>
      <div>
      <input
  ref={miInputRefBanca}
  type="number"
  id="banca"
  // {...register("banca", { min: 1 })}
  onInput={(e) => {
    let newValue = Math.max(0, parseInt(e.target.value || 0)).toString().slice(0, 3);
    if (newValue === "0") {
      newValue = "";
    }
    e.target.value = newValue;
  }}
  tabIndex={0} // Agrega este atributo
/>

      </div>
      <div className='mostrarPr' >
        <div className='ejercicioPr1' onClick={() => selectMarca(miInputRefBanca)}>
          <div className='ejercicioPr'>
            <div className=''><span>---</span></div>
            <div>kg</div>
            <div>Press Banca</div>
          </div>
        </div>

        <div className='ejercicioPr1'>
          <div className='ejercicioPr'>
            <div className=''><span>---</span></div>
            <div>kg</div>
            <div>Sentadilla</div>
          </div>
        </div>

        <div className='ejercicioPr1'>
          <div className='ejercicioPr'>
            <div className=''><span>---</span></div>
            <div>kg</div>
            <div>Peso muerto</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prueba_rf
