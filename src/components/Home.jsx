import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Nexus DeFi</h2>
        <button className="menu-btn" onClick={() => navigate('/services')}>Cursos</button>
        <button className="menu-btn" onClick={() => navigate('/contact')}>Contacto</button>
        <button className="menu-btn" onClick={() => navigate('/about')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>¡Bienvenido a Nexus DeFi!</h1>
          <ul>
            <li><strong>Bienvenida personalizada:</strong> ¡Hola futuro experto en DeFi! Prepárate para dominar el mundo de las finanzas descentralizadas.</li>
            <li><strong>Últimas noticias y anuncios:</strong> Descubre nuestro nuevo curso avanzado sobre Smart Contracts y el calendario de eventos de la comunidad.</li>
            <li><strong>Acceso directo a clases y material de estudio:</strong> Navega fácilmente a tus módulos de aprendizaje y recursos exclusivos.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;