import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserResults from '../components/UserResults';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import WelcomeMessage from '../components/WelcomeMessage'

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const handleSearch = async (query) => {
    if(query === '') return
    setLoading(true);
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    setLoading(false);
    if (data.items.length === 0) {
        toast.error('Usuario no encontrado');
    }
    setUsers(data.items);
  };

  return (
    <div className='text-center'>
        <h1>Usarios de Github</h1>
        <SearchBar 
            text="Buscar usuarios de Github" 
            onSearch={handleSearch} 
            isLoading={loading}
        />
        {users.length === 0 ? <WelcomeMessage /> : ''}
        {loading ? <Loader text="Cargando usuarios..." /> : <UserResults users={users} />}
    </div>
  );
};

export default UserSearch;
