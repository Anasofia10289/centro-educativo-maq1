import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerRetina,
  shadowUrl: shadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Contact = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nuestro equipo se pondrá en contacto contigo a la brevedad.');
  };

  
  const medellinCoordinates = [6.2442, -75.5812];
  const nexusDefiAddress = "Calle 50# 123-23, Medellin-Antioquia, Mundo Blockchain"; 

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Nexus DeFi</h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Inicio</button>
        <button className="menu-btn" onClick={() => navigate('/services')}>Cursos</button>
        <button className="menu-btn" onClick={() => navigate('/about')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>Contáctanos</h1>
          <p>¿Tienes alguna pregunta o duda administrativa o académica? No dudes en contactarnos.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="message">Tu mensaje o consulta:</label>
            <textarea id="message" rows="4" placeholder="Escribe tu mensaje aquí..." required style={{ width: '100%', padding: '10px', borderRadius: '10px', marginTop: '10px' }} />
            <button type="submit" className="menu-btn" style={{ marginTop: '15px' }}>Enviar Mensaje</button>
          </form>

          <div style={{ marginTop: '30px' }}>
            <h3>Información de Contacto</h3>
            <p><strong>Sede Principal:</strong> {nexusDefiAddress}</p>
            <p><strong>Teléfono:</strong> +57 1 800 NEXUS (63987)</p>
            <p><strong>Email:</strong> info@nexusdefi.edu</p>
          </div>

          <div className="section-block" style={{ marginTop: '30px' }}>
            <h3>Ubicación</h3>
            <div style={{ height: '300px', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
              <MapContainer center={medellinCoordinates} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={medellinCoordinates} icon={customIcon}>
                  <Popup>{`Nexus DeFi - ${nexusDefiAddress}`}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;