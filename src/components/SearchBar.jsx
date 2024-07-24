import React, { useState } from 'react';

const SearchBar = ({ text, onSearch, isLoading  }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder={text} 
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
            <div className="button-loader"></div>
          ) : (
            'Buscar'
          )}
      </button>
    </form>
  );
};

export default SearchBar;