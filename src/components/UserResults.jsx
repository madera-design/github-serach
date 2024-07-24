import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faUser} from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const UserResults = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };
  return (
    <div className="results" >
      {users.map(user => (
        <div key={user.id} className="card cursor-pointer">
          <img src={user.avatar_url} alt={user.login} />
          <p><FontAwesomeIcon icon={faUser} /> {user.login || 'N/A'}</p>
          <p>ID: {user.id || 'N/A'}</p>
          <p><FontAwesomeIcon icon={faLink} /> <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
          <button className="button-a" key={user.id} onClick={() => handleUserClick(user)}>Ver perfil</button>
        </div>
      ))}
      {selectedUser && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          username={selectedUser.login} 
        />
      )}
    </div>
  );
};

export default UserResults;
