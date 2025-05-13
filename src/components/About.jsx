import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  return (
    <div className="about-container">
      <aside className="sidebar">
        <h2>Nexus DeFi</h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Inicio</button>
        <button className="menu-btn" onClick={() => navigate('/courses')}>Cursos</button>
        <button className="menu-btn" onClick={() => navigate('/contact')}>Contacto</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>

      <main className="home-main">
        <div className="home-content card">
          <h1>Acerca de Nexus DeFi</h1>

          <section style={{ marginBottom: '20px' }}>
            <h3>Nuestra Historia</h3>
            <p>
              Nexus DeFi nació de la visión de democratizar el acceso al conocimiento sobre finanzas descentralizadas. Fundado en [Año de Fundación], nuestro centro educativo se estableció como un punto de encuentro para aquellos que buscan comprender y participar activamente en la revolución DeFi. Desde nuestros inicios, hemos crecido hasta convertirnos en una comunidad de aprendizaje vibrante y en constante expansión.
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3>Misión y Visión</h3>
            <p>
              <strong>Nuestra Misión:</strong> Empoderar a individuos con el conocimiento y las habilidades necesarias para navegar y prosperar en el ecosistema de las finanzas descentralizadas, fomentando la innovación y la adopción responsable.
            </p>
            <p>
              <strong>Nuestra Visión:</strong> Ser el centro educativo líder en formación integral sobre DeFi, reconocido por la calidad de nuestros programas, la excelencia de nuestro equipo docente y el impacto positivo en la comunidad financiera global.
            </p>
          </section>

          <section>
            <h3>Nuestro Equipo</h3>
            <p>
              Contamos con un equipo de instructores expertos, profesionales de la industria blockchain y entusiastas de DeFi apasionados por compartir su conocimiento. Nuestros docentes combinan experiencia práctica con una sólida base teórica para ofrecer una educación de primer nivel.
            </p>
            
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;