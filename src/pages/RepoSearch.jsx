import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RepoResults from '../components/RepoResults';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import WelcomeMessage from '../components/WelcomeMessage'

const RepoSearch = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
    const data = await response.json();
    setLoading(false);
    if (data.items.length === 0) {
        toast.error('Repositorio no encontrado');
    }
    setRepos(data.items);
  };

  return (
    <div className='text-center'>
        <h1>Repositorios de Github</h1>
        <SearchBar 
            text="Buscar repositorios de Github" 
            onSearch={handleSearch} 
            isLoading={loading}
        />
        {repos.length === 0 ? <WelcomeMessage /> : ''}
        {loading ? <Loader text="Cargando repositorios..."/> : <RepoResults repos={repos} />}
    </div>
  );
};

export default RepoSearch;
