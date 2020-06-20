import React from 'react';
import MobileNavLinks from './MobileNavLinks';
import DesktopNavLinks from './DesktopNavLinks';
import {Link} from 'react-router-dom';

interface Props {
  isMenuOpen: boolean;
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  laptop: boolean;
}

const NavLinks: React.FC<Props> = ({isMenuOpen, toggleMenuOpen, laptop}) => {
  return (
    <>
      <div className="logo">
        <Link to="/popular">MovieDB</Link>
      </div>
      <MobileNavLinks
        laptop={laptop}
        toggleMenuOpen={toggleMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <DesktopNavLinks />
    </>
  );
};

export default NavLinks;
