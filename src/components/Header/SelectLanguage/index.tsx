import React, {useContext} from 'react';
import {LanguageContext} from '../../../contexts/LanguageContext';
import plFlag from '../../../images/pl-flag.png';
import usFlag from '../../../images/us-flag.png';

interface Props {
  laptop: boolean;
}

const SelectLanguage: React.FC<Props> = ({laptop}) => {
  const [language, setLanguage] = useContext(LanguageContext);

  const plFlagStyle: React.CSSProperties = {
    filter: language === 'pl' ? 'grayscale(0)' : undefined,
  };

  const usFlagStyle: React.CSSProperties = {
    filter: language === 'en' ? 'grayscale(0)' : undefined,
  };

  const handleLanguageOnClick = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <>
      {!laptop && (
        <div className="language-select">
          <img
            src={usFlag}
            className="flag-container"
            onClick={() => handleLanguageOnClick('en')}
            style={usFlagStyle}
            alt="usFlag"
          />
          <img
            src={plFlag}
            className="flag-container"
            onClick={() => handleLanguageOnClick('pl')}
            style={plFlagStyle}
            alt="plFlag"
          />
        </div>
      )}
    </>
  );
};

export default SelectLanguage;
