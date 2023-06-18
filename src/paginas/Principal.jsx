import React, { useState } from 'react';
import Nav from '../Nav';
import { ToastContainer, toast } from 'react-toastify';
import imgEntreno from '../img/entreno.jpg';
import imgProgreso from '../img/progreso.jpg';
import imgFood from '../img/food.jpg';
// import SnatchBot from 'react-snatchbot';

const Principal = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const formContacto = (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario
    toast.success('Mensaje enviado', { autoClose: 2500 });

    // Restablecer los campos del formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  }

  return (
    <div className="landing-page">
      <header >
        <Nav></Nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a FitnessApp</h1>
          <p className="hero-description">
            El sistema de fitness que te ayudará a alcanzar tus metas de manera eficiente.
          </p>
          <a href="#features" className="cta-button">
            Descubre más
          </a>
        </div>
      </section>
      <section className="features" id="features">
        <div className="feature">
          <h2 className="feature-title">Entrenamientos personalizados</h2>
          <p className="feature-description">
            Diseñamos rutinas de entrenamiento específicas para cada usuario, adaptadas a sus objetivos y nivel de
            condición física.
          </p>
          <img src={imgEntreno} alt="Entreno" />
        </div>
        <div className="feature">
          <h2 className="feature-title">Seguimiento de progreso</h2>
          <p className="feature-description">
            Registra tu progreso en cada sesión de entrenamiento y visualiza tus mejoras a lo largo del tiempo.
          </p>
          <img src={imgProgreso} alt="Progreso" />
        </div>
        <div className="feature">
          <h2 className="feature-title">Nutrición saludable</h2>
          <p className="feature-description">
            Te ofrecemos planes de alimentación equilibrados y saludables, diseñados por expertos en nutrición.
          </p>
          <img src={imgFood} alt="food" />
        </div>
      </section>
      
      <section className="contact" id="contact">
        <h2 className="contact-title">¡Contáctanos!</h2>
        <p className="contact-description">Si tienes alguna pregunta o consulta, no dudes en contactarnos.</p>
        <form onSubmit={formContacto} className="contact-form">
          <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
          <textarea required value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Mensaje"></textarea>
          <button type="submit" className="cta-button">
            Enviar mensaje
          </button>
        </form>
      </section>
      <footer className="footer">
        <p>© 2023 Wellington Crespo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Principal;
