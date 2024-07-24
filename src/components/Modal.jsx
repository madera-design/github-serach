import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays, faLocationDot, faBuilding, faUser, faBook} from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, username }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
        const year = date.getUTCFullYear();
      
        return `${day}/${month}/${year}`;
      };

    useEffect(() => {
        if (isOpen && username) {
          const fetchUserData = async () => {
            try {
              const response = await fetch(`https://api.github.com/users/${username}`);
              if (!response.ok) {
                throw new Error('Failed to fetch user data');
              }
              const data = await response.json();
              setUserData(data);
              setLoading(false);
            } catch (error) {
              setError(error);
              setLoading(false);
            }
          };
          
          fetchUserData();
        }
      }, [isOpen, username]);
    
      if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error.message}</p>}
        {userData && (
          <>
          <div className="m-content--img">
            <img src={userData.avatar_url} alt={userData.login} className="modal-avatar" />
            <div className="m-content--img__info">
                <p><FontAwesomeIcon icon={faUser} /> {userData.name || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faCalendarDays} /> {formatDate(userData.created_at) || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faBook} /> {userData.bio || 'N/A'}</p>
            </div>

          </div>
            <div className="content-info">
                <div>
                  <p>Repositorios</p>
                  <p><b>{userData.public_repos || '0'}</b></p>
                </div>
                <div>
                  <p>Seguidores</p>
                  <p><b>{userData.followers || '0'}</b></p>
                </div>
                <div>
                  <p>Seguidos</p>
                  <p><b>{userData.following || '0'}</b></p>
                </div>
            </div>
            <div className="m-content__text mt-5">
                <p><FontAwesomeIcon icon={faLocationDot} /> {userData.location || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faBuilding} />  {userData.company || 'N/A'}</p>
                <p><FontAwesomeIcon icon={faTwitter} />  {userData.twitter_username || 'N/A'}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;