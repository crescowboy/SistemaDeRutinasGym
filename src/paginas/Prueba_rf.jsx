import React, { useRef } from 'react'

const Prueba_rf = () => {

    const miInputRefBanca = useRef(null);

    const selectMarca = (ref) => {
        // Enfoca el input cuando se hace clic en el div
        // console.log("Div clickeado");
        
        if(miInputRefBanca.current){
          miInputRefBanca.current.focus();
         } 
          
        
        
      };

  return (
    <div>
      <div>
        <input ref={miInputRefBanca} type="text" />
      </div>
      <div onClick={selectMarca}>
        holaaaaaaa
      </div>
    </div>
  )
}

export default Prueba_rf
