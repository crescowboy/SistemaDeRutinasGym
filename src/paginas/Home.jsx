import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Comparar usuario y contraseña
    if (user === 'user' && password === 'password') {
      // Redirigir a la otra página
      navigate('/registrarPr'
      );
    } else {
      // Mostrar mensaje de error o realizar otra acción
      Swal.fire({
        title: 'Usuario o contraseña incorrecta',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      })

      setUser('');
      setPassword('');
    }
  };

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
            />
            <button type="submit" onClick={handleLogin}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
