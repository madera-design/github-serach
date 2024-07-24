import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
        </li>
        <li>
          <Link to="/users">Buscar Usuarios</Link>
        </li>
        <li>
          <Link to="/repos">Buscar Repositorios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
