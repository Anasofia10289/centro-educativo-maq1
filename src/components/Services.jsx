import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Universidad de Laureles </h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Inicio</button>
        <button className="menu-btn" onClick={() => navigate('/contact')}>Contacto</button>
        <button className="menu-btn" onClick={() => navigate('/about')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>Nuestros Cursos</h1>
          <ul>
            <li><strong>Gestión del Desarrollo Comunitario:</strong>  Forma profesionales capaces de liderar proyectos sociales, fortalecer organizaciones locales y diseñar estrategias participativas para el bienestar colectivo. Combina conocimientos en sociología, economía solidaria y políticas públicas con prácticas en comunidades reales.<button className="enroll-btn">Inscribirse</button></li>
            <li><strong>Ingeniería Ambiental y Agroecología:</strong> Integra la tecnología con el respeto por la naturaleza, enfocándose en soluciones sostenibles para la producción agrícola, el manejo de recursos naturales y la adaptación al cambio climático. Los estudiantes aprenden tanto en laboratorios como en fincas y territorios rurales.<button className="enroll-btn">Inscribirse</button></li>
            <li><strong>Educación Intercultural y Pedagogía Comunitaria:</strong> Prepara educadores que valoran la diversidad cultural y lingüística, con enfoques pedagógicos innovadores y herramientas para enseñar en contextos rurales, indígenas y urbanos. Promueve una educación crítica, inclusiva y transformadora desde la raíz.<button className="enroll-btn">Inscribirse</button></li>
            <li><strong>Comunicación para el Cambio Social:</strong> Forma comunicadores comprometidos con la transformación social a través de medios responsables, narrativas comunitarias y tecnologías accesibles. Esta carrera combina periodismo, comunicación audiovisual y participación ciudadana para dar voz a quienes históricamente han sido silenciados. <button className="enroll-btn">Inscribirse</button></li>
    
          </ul>
          <p>Para más detalles sobre horarios y procesos de inscripción, por favor, contacta a nuestro equipo.</p>
        </div>
      </main>
    </div>
  );
};

export default Services;