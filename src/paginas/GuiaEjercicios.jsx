import React, { useState } from 'react';
import Modal from 'react-modal';
import Nav from '../Nav';
import gym1 from '../img/gym1.jpg';
import gym2 from '../img/gym2.jpg';
import gym3 from '../img/gym3.jpg';

// Configura el elemento raíz para el modal
Modal.setAppElement('#root');

const GuiaEjercicios = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalContent('');
    setShowModal(false);
  };

  const infoMusculo = () => {
    const content = (
      <div className='modal-guia'>
        <h4>Recomendaciones para ganar músculo:</h4>
        <ul>
          <li>Realiza entrenamientos de fuerza con pesas o máquinas.</li>
          <li>Incorpora ejercicios compuestos como sentadillas, press de banca, peso muerto y dominadas.</li>
          <li>Asegúrate de incluir ejercicios específicos para cada grupo muscular.</li>
          <li>Realiza entre 8 y 12 repeticiones por serie para estimular el crecimiento muscular.</li>
          <li>Aumenta gradualmente la carga y la intensidad de tus entrenamientos.</li>
          <li>Descansa lo suficiente entre series y ejercicios para permitir que tus músculos se recuperen.</li>
          <li>Consume suficiente proteína en tu dieta para apoyar la síntesis de proteínas musculares.</li>
          <li>Mantén una alimentación balanceada y asegúrate de obtener los nutrientes necesarios.</li>
          <li>Considera la posibilidad de trabajar con un entrenador personal para recibir orientación especializada.</li>
        </ul>
      </div>
    );
    openModal(content);
  };

  const infoGrasa = () => {
    const content = (
      <div className='modal-guia'>
        <h4>Recomendaciones para perder grasa:</h4>
        <ul>
          <li>Realiza una combinación de entrenamiento cardiovascular y entrenamiento de fuerza.</li>
          <li>Incorpora ejercicios cardiovasculares de alta intensidad, como el entrenamiento de intervalos de alta intensidad (HIIT).</li>
          <li>Realiza sesiones de cardio de moderada intensidad para quemar calorías y mejorar la resistencia cardiovascular.</li>
          <li>Incluye ejercicios de fuerza para mantener la masa muscular y aumentar el metabolismo.</li>
          <li>Sigue una dieta equilibrada y saludable, enfocada en alimentos frescos y nutritivos.</li>
          <li>Controla tus porciones y consume menos calorías de las que quemas para crear un déficit calórico.</li>
          <li>Limita la ingesta de alimentos procesados, azúcares añadidos y grasas saturadas.</li>
          <li>Bebe suficiente agua para mantener una hidratación adecuada.</li>
          <li>Establece metas realistas y mantén un seguimiento de tu progreso.</li>
        </ul>
      </div>
    );
    openModal(content);
  };

  const infoResistencia = () => {
    const content = (
      <div className='modal-guia'>
        <h4>Recomendaciones para ganar resistencia:</h4>
        <ul>
          <li>Realiza entrenamientos cardiovasculares regulares, como correr, nadar o andar en bicicleta.</li>
          <li>Incorpora entrenamientos de alta intensidad para mejorar la resistencia cardiovascular, como el entrenamiento en intervalos.</li>
          <li>Realiza ejercicios de resistencia muscular, como levantamiento de pesas o entrenamiento con bandas de resistencia.</li>
          <li>Aumenta gradualmente la duración e intensidad de tus entrenamientos para desafiar tu resistencia.</li>
          <li>Incluye ejercicios funcionales que imiten los movimientos de tu actividad o deporte objetivo.</li>
          <li>Descansa adecuadamente entre entrenamientos para permitir la recuperación muscular.</li>
          <li>Realiza ejercicios de flexibilidad y estiramientos para mejorar la movilidad y prevenir lesiones.</li>
          <li>Mantén una alimentación equilibrada que proporcione los nutrientes necesarios para el rendimiento.</li>
          <li>Considera la posibilidad de trabajar con un entrenador o especialista en rendimiento deportivo para optimizar tus entrenamientos.</li>
        </ul>
      </div>
    );
    openModal(content);
  };

  return (
    <>
      <div className='container-guiaRutina-padre'>
        <Nav></Nav>
        <h1>Guía</h1>

        <div className='container-card'>
          <div className="card">
            <h3>Ganar músculo</h3>
            <img className='img-card' src={gym1} alt="asd" />
            <button className='btn-ver' onClick={infoMusculo}>Ver más</button>
          </div>
          <div className="card">
            <h3>Perder grasa</h3>
            <img className='img-card' src={gym2} alt="" />
            <button className='btn-ver' onClick={infoGrasa}>Ver más</button>
          </div>
          <div className="card">
            <h3>Ganar resistencia</h3>
            <img className='img-card' src={gym3} alt="" />
            <button className='btn-ver' onClick={infoResistencia}>Ver más</button>
          </div>
        </div>

        <Modal isOpen={showModal} onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Cambia el color de fondo del overlay del modal
          },
          content: {
            background: '#2D333B', // Cambia el color de fondo del contenido del modal
            // Agrega aquí otros estilos deseados para el contenido del modal
          }
        }}
        >
          {modalContent}
          <button className="btn-ver" onClick={closeModal}>Cerrar</button>
        </Modal>
      </div>
    </>
  );
};

export default GuiaEjercicios;
