import React, {createContext, useEffect, useState} from 'react';
import {IntlProvider} from 'react-intl';
import Polish from '../../languages/pl.json';
import English from '../../languages/en.json';

export const LanguageContext = createContext();

const LanguageProvider = props => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en',
  );
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (language === 'pl') return setMessages(Polish);
    return setMessages(English);
  }, [language]);

  return (
    <IntlProvider messages={messages} locale="en">
      <LanguageContext.Provider value={[language, setLanguage]}>
        {props.children}
      </LanguageContext.Provider>
    </IntlProvider>
  );
};

export default LanguageProvider;
