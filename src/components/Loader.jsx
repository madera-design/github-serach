import React from 'react';

const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <h3>{text}</h3>
    </div>
  );
};

export default Loader;