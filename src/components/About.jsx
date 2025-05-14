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
        <h2>Universidad de Laureles</h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Inicio</button>
        <button className="menu-btn" onClick={() => navigate('/services')}>Cursos</button>
        <button className="menu-btn" onClick={() => navigate('/contact')}>Contacto</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>

      <main className="home-main">
        <div className="home-content card">
          <h1>Acerca de la Universidad de Laureles</h1>

          <section style={{ marginBottom: '20px' }}>
            <h3>Nuestra Historia</h3>
            <p>
              Universidad de Laureles: Donde florecen los sueños
En lo alto de una colina cubierta de árboles centenarios, donde los laureles perfumaban el viento y las aves tejían melodías en el amanecer, nació la Universidad de Laureles, una institución fundada sobre tres pilares: conocimiento, comunidad y transformación.

Corría el año 1978 cuando un grupo de profesores, cansados del sistema rígido y elitista de las universidades tradicionales, decidió construir un espacio donde aprender no fuera un privilegio, sino un derecho. Eligieron ese terreno olvidado, entre pueblos y cafetales, porque creían que el conocimiento debía florecer en el corazón de la gente común.

Los primeros años fueron difíciles. Las aulas eran salones prestados, los libros eran donados, y los estudiantes estudiaban a la luz de velas cuando la electricidad fallaba. Pero la pasión por enseñar y aprender encendía más que cualquier bombilla. El rector fundador, Don Agustín Rosales, repetía cada mañana:

“Aquí no solo preparamos profesionales. Aquí sembramos árboles de pensamiento que un día darán sombra al mundo.”

Con el tiempo, la Universidad de Laureles creció. Se construyeron facultades, laboratorios, un observatorio astronómico y un centro cultural que acogía a artistas de toda la región. A diferencia de otras instituciones, en Laureles era común ver a un ingeniero dialogar con un poeta, o a un agricultor local dar una clase sobre el uso tradicional de las plantas medicinales.

Una de sus mayores gestas fue el Programa de Sabiduría Popular, que permitía que ancianos de las comunidades cercanas enseñaran sobre historia oral, técnicas ancestrales y filosofías de vida que no estaban en los libros. Para Laureles, el conocimiento no tenía edad ni estatus.

En el año 2005, la universidad enfrentó su mayor crisis. Una reforma educativa intentó centralizar las universidades del país, y muchas instituciones pequeñas fueron absorbidas o cerradas. Pero los estudiantes de Laureles no lo permitieron. Se organizaron, escribieron cartas, hicieron documentales, hablaron con la prensa. Su lema en las marchas fue claro:
“Un árbol no se arranca sin resistencia.”

Gracias al apoyo nacional e internacional, la universidad sobrevivió. Hoy en día, la Universidad de Laureles es reconocida por su enfoque humano e integral, y por formar líderes con conciencia social, creatividad y humildad.

Bajo sus laureles aún se oyen risas, debates y sueños. Y cada estudiante que pasa por allí sabe que está pisando tierra fértil no solo para su carrera, sino para su vida.
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3>Misión y Visión</h3>
            <p>
              <strong>Nuestra Misión:</strong> Formar profesionales íntegros, críticos y comprometidos con el desarrollo humano, social y ambiental, a través de una educación inclusiva, intercultural y transformadora que integra el saber académico con la sabiduría popular. La Universidad de Laureles promueve el pensamiento libre, el diálogo entre disciplinas y el servicio a las comunidades, sembrando conocimiento que florece en acciones concretas.
            </p>
            <p>
              <strong>Nuestra Visión:</strong> Ser una universidad reconocida nacional e internacionalmente por su modelo educativo humanista, su impacto en las comunidades y su capacidad para formar líderes conscientes, creativos y solidarios. Aspiramos a seguir siendo un referente de innovación social y académica, donde el aprendizaje se cultiva como un árbol: con raíces profundas en la tierra y ramas abiertas al mundo.
            </p>
          </section>

          <section>
            <h3>Nuestro Equipo</h3>
            <p>
              Contamos con un equipo de instructores expertos, profesionales, apasionados por compartir su conocimiento. Nuestros docentes combinan experiencia práctica con una sólida base teórica para ofrecer una educación de primer nivel.
            </p>
            
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;