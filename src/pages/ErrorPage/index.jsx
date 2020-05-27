import React from 'react';

const ErrorPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '20px',
        flexDirection: 'column',
      }}
    >
      <h3 style={{color: 'gray'}}>Ooops!</h3>
      <h1>Something went wrong</h1>
      <button onClick={() => (window.location.href = '/')}>Go back</button>
    </div>
  );
};

export default ErrorPage;
