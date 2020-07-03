import React from 'react';
import {NavLink} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import MobileLanguageSelect from './MobileLanguageSelect';

interface Props {
  laptop: boolean;
  isMenuOpen: boolean;
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavLinks: React.FC<Props> = ({
  laptop,
  isMenuOpen,
  toggleMenuOpen,
}) => {
  const mobileLinks = ['popular', 'top_rated', 'upcoming', 'discover'];

  const handleOnClick = () => {
    document.body.style.overflow = 'visible';
    toggleMenuOpen(false);
  };

  return (
    <>
      {laptop && (
        <div className={isMenuOpen ? 'sidebar-menu open' : 'sidebar-menu'}>
          <div
            className={isMenuOpen ? 'mobile-menu list-visible' : 'mobile-menu'}
          >
            <div className="link-container">
              <div className="mobile-links">
                {mobileLinks.map(link => {
                  return (
                    <NavLink to={`/${link}`} key={link} onClick={handleOnClick}>
                      <li>
                        <FormattedMessage
                          defaultMessage={link}
                          id={`navbar.${link}`}
                        >
                          {message => message}
                        </FormattedMessage>
                      </li>
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <MobileLanguageSelect />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavLinks;
