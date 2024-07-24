import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faCodeFork, faCode, faLink } from '@fortawesome/free-solid-svg-icons';

const RepoResults = ({ repos }) => {
  return (
    <div className="results">
      {repos.map(repo => (
        <div key={repo.id} className="card">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLink} /> {repo.name}
          </a>
          <p><FontAwesomeIcon icon={faUser} /> {repo.owner.login || 'N/A'} </p>
          <p><FontAwesomeIcon icon={faStar} /> {repo.stargazers_count || 'N/A'}</p>
          <p><FontAwesomeIcon icon={faCodeFork} /> {repo.forks_count || 'N/A'}</p>
          <p><FontAwesomeIcon icon={faCode} /> {repo.language || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoResults;
