import React from 'react';

const ErrorPage: React.FC = () => {
  const handleOnClick = () => (window.location.href = '/');

  return (
    <div className="error-page-wrapper">
      <div className="error-page-box">
        <h3>Ooops!</h3>
        <h1>Something went wrong!</h1>
        <button onClick={() => handleOnClick()}>Go back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
