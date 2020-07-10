import React, {useContext} from 'react';
import {LanguageContext} from '../../../../../contexts/LanguageContext';
import plFlag from '../../../../../images/pl-flag.png';
import usFlag from '../../../../../images/us-flag.png';
import styled from 'styled-components';

interface Flag {
  language: string;
}

const UsFlag = styled.img`
  filter: ${({language}: Flag) => (language === 'en' ? 'grayscale(0)' : '')};
`;

const PlFlag = styled.img`
  filter: ${({language}: Flag) => (language === 'pl' ? 'grayscale(0)' : '')};
`;

const MobileLanguageSelect: React.FC = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  const handleLanguageOnClick = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="mobile-language-select">
      <UsFlag
        src={usFlag}
        className="flag-container"
        onClick={() => handleLanguageOnClick('en')}
        language={language}
        alt="usFlag"
      />
      <PlFlag
        src={plFlag}
        className="flag-container"
        onClick={() => handleLanguageOnClick('pl')}
        language={language}
        alt="plFlag"
      />
    </div>
  );
};

export default MobileLanguageSelect;
