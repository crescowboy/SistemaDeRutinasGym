import React from 'react';
import Nav from '../Nav';
import { ToastContainer, toast } from 'react-toastify';
import imgEntreno from '../img/entreno.jpg';
import imgProgreso from '../img/progreso.jpg';
import imgFood from '../img/food.jpg';

const Principal = () => {

  const formContacto = () =>{
    toast.success('Mensaje enviado', { autoClose: 2500 });
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
        <form className="contact-form">
          <input type="text" required placeholder="Nombre" />
          <input type="email" required placeholder="Correo electrónico" />
          <textarea required placeholder="Mensaje"></textarea>
          <button type="submit" onClick={formContacto} className="cta-button">
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
