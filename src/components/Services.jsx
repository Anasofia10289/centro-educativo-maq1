import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Nexus DeFi</h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Inicio</button>
        <button className="menu-btn" onClick={() => navigate('/contact')}>Contacto</button>
        <button className="menu-btn" onClick={() => navigate('/about')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>Nuestros Cursos en Finanzas Descentralizadas</h1>
          <ul>
            <li><strong>Fundamentos de DeFi:</strong> Aprende los conceptos básicos, la tecnología blockchain subyacente y las oportunidades del ecosistema DeFi. (Modalidad: Virtual, Horarios: Consultar calendario) <button className="enroll-btn">Inscribirse</button></li>
            <li><strong>Smart Contracts y Desarrollo en Solidity:</strong> Domina la creación y auditoría de contratos inteligentes en la red Ethereum. (Modalidad: Virtual, Horarios: Consultar calendario) <button className="enroll-btn">Inscribirse</button></li>
            <li><strong>Yield Farming y Staking Avanzado:</strong> Estrategias para maximizar rendimientos en plataformas DeFi. (Modalidad: Virtual/Presencial - Consultar disponibilidad, Horarios: Consultar calendario) <button className="enroll-btn">Inscribirse</button></li>
            <li><strong>Gestión de Riesgos y Seguridad en DeFi:</strong> Identifica y mitiga los riesgos asociados a la inversión y participación en DeFi. (Modalidad: Virtual, Horarios: Consultar calendario) <button className="enroll-btn">Inscribirse</button></li>
            {/* Puedes añadir más cursos aquí */}
          </ul>
          <p>Para más detalles sobre horarios y procesos de inscripción, por favor, contacta a nuestro equipo.</p>
        </div>
      </main>
    </div>
  );
};

export default Courses;