import React from 'react';
import App from '../App';
import DisplayProvider from '../contexts/DisplayContext';
import LanguageProvider from '../contexts/LanguageContext';
import ResolutionProvider from '../contexts/ResolutionContext';

const Root: React.FC = () => {
  return (
    <LanguageProvider>
      <DisplayProvider>
        <ResolutionProvider>
          <App />
        </ResolutionProvider>
      </DisplayProvider>
    </LanguageProvider>
  );
};

export default Root;
