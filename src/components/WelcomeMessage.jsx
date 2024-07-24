import React from 'react';
import githubLogo from '../assets/GitHub-Logo.png';


const WelcomeMessage = () => {
  return (
    <div className="welcome-container">
      <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      <p>Utiliza las barras de búsqueda para encontrar usuarios y repositorios en GitHub.</p>
    </div>
  );
};

export default WelcomeMessage;