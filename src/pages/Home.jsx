import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../assets/GitHub-Logo.png'; // Asegúrate de tener esta imagen en la carpeta assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      <h1>Bienvenido a la Búsqueda de GitHub</h1>
      <p>Esta aplicación te permite buscar usuarios y repositorios en GitHub utilizando la API de GitHub.</p>
      <p>Para empezar, selecciona una opción en el menú de navegación.</p>
      <div className="buttons">
        <Link to="/users">
          <button className="home-button">Buscar Usuarios</button>
        </Link>
        <Link to="/repos">
          <button className="home-button">Buscar Repositorios</button>
        </Link>
      </div>
      <footer className="footer">
        <p>Desarrollado por Jose Antonio Madera Gonzalez</p>
        <div>
          <a href="https://github.com/madera-design" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
          <a className="ml-5" href="https://www.linkedin.com/in/maderadesign/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
