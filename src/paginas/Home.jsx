import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Contexto } from '../context/Contexto';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const {logearme} = useContext(Contexto)

  const Login = () => {
    // Eliminar los espacios en blanco al principio y al final del usuario y la contraseña
    const User = user.trim();
    const Password = password.trim();

    // Comparar usuario y contraseña sin espacios en blanco
    if (User === 'user' && Password === 'password') {
      // Redirigir a la otra página
      navigate('/registrarPr', {replace:true});
      logearme('login')
      
    } else {
      // Mostrar mensaje de error o realizar otra acción
      Swal.fire({
        title: 'Usuario o contraseña incorrecta',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      });

      setUser('');
      setPassword('');
    }
  };

  const KeyDown = (e) =>{
    if(e.keyCode === 13){
      Login();
    }
    
  }

  return (
    <>
      <div className="container-empezar">
        <div className="empezar">
          <h1>Empieza a conseguir resultados!</h1>
          <div className="login">
            <h2>Login</h2>
            <label htmlFor="user">Usuario:</label>
            <input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={KeyDown}
            />
            <button type="submit" onClick={Login}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
