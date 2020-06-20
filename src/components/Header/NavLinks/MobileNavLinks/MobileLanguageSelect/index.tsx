import React, {useContext} from 'react';
import {LanguageContext} from '../../../../../contexts/LanguageContext';
import plFlag from '../../../../../images/pl-flag.png';
import usFlag from '../../../../../images/us-flag.png';

const MobileLanguageSelect: React.FC = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const plFlagStyle = {
    filter: language === 'pl' ? 'grayscale(0)' : undefined,
  };

  const usFlagStyle = {
    filter: language === 'en' ? 'grayscale(0)' : undefined,
  };

  return (
    <div className="mobile-language-select">
      <img
        src={usFlag}
        className="flag-container"
        onClick={() => setLanguage('en')}
        style={usFlagStyle}
        alt="usFlag"
      />
      <img
        src={plFlag}
        className="flag-container"
        onClick={() => setLanguage('pl')}
        style={plFlagStyle}
        alt="plFlag"
      />
    </div>
  );
};

export default MobileLanguageSelect;
