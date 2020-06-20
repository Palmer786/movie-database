import React from 'react';
import App from '../App';
import DisplayProvider from '../contexts/DisplayContext';
import LanguageProvider from '../contexts/LanguageContext';

const Root: React.FC = () => {
  return (
    <LanguageProvider>
      <DisplayProvider>
        <App />
      </DisplayProvider>
    </LanguageProvider>
  );
};

export default Root;
