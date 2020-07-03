import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="container">
        <div className="loading-circle first" />
        <div className="loading-circle second" />
        <div className="loading-circle third" />
      </div>
    </div>
  );
};

export default Loading;
