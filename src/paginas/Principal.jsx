import React from 'react';
import Nav from '../Nav';

const Principal = () => {
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
        </div>
        <div className="feature">
          <h2 className="feature-title">Seguimiento de progreso</h2>
          <p className="feature-description">
            Registra tu progreso en cada sesión de entrenamiento y visualiza tus mejoras a lo largo del tiempo.
          </p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Nutrición saludable</h2>
          <p className="feature-description">
            Te ofrecemos planes de alimentación equilibrados y saludables, diseñados por expertos en nutrición.
          </p>
        </div>
      </section>
      {/* <section className="pricing" id="pricing">
        <h2 className="pricing-title">Nuestros planes de suscripción</h2>
        <div className="pricing-plans">
          <div className="pricing-plan">
            <h3 className="plan-title">Básico</h3>
            <p className="plan-description">Acceso a entrenamientos y seguimiento de progreso</p>
            <p className="plan-price">$9.99/mes</p>
            <a href="#contact" className="cta-button">
              Suscribirse
            </a>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-title">Avanzado</h3>
            <p className="plan-description">Acceso a entrenamientos, seguimiento de progreso y planes de nutrición</p>
            <p className="plan-price">$19.99/mes</p>
            <a href="#contact" className="cta-button">
              Suscribirse
            </a>
          </div>
        </div>
      </section> */}
      <section className="contact" id="contact">
        <h2 className="contact-title">¡Contáctanos!</h2>
        <p className="contact-description">Si tienes alguna pregunta o consulta, no dudes en contactarnos.</p>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
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
