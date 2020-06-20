import React, {createContext, useEffect, useState} from 'react';
import {IntlProvider} from 'react-intl';
import Polish from '../../languages/pl.json';
import English from '../../languages/en.json';

type Context = [string, React.Dispatch<React.SetStateAction<string>>];

interface Props {
  children: React.ReactNode;
}

export const LanguageContext = createContext<Context>(null!);

const LanguageProvider: React.FC<Props> = ({children}) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en',
  );
  const [messages, setMessages] = useState(English);

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
        {children}
      </LanguageContext.Provider>
    </IntlProvider>
  );
};

export default LanguageProvider;
