import React, {useContext} from 'react';
import {LanguageContext} from '../../../contexts/LanguageContext';
import plFlag from '../../../images/pl-flag.png';
import usFlag from '../../../images/us-flag.png';

const SelectLanguage = ({laptop}) => {
  const [language, setLanguage] = useContext(LanguageContext);

  const plFlagStyle = {
    filter: language === 'pl' && 'grayscale(0)',
  };

  const usFlagStyle = {
    filter: language === 'en' && 'grayscale(0)',
  };

  return (
    <>
      {!laptop && (
        <div className="language-select">
          <img
            src={usFlag}
            className="flag-container"
            onClick={() => setLanguage('en')}
            style={usFlagStyle}
          />
          <img
            src={plFlag}
            className="flag-container"
            onClick={() => setLanguage('pl')}
            style={plFlagStyle}
          />
        </div>
      )}
    </>
  );
};

export default SelectLanguage;
