import React from 'react';
import MobileNavLinks from './MobileNavLinks';
import DesktopNavLinks from './DesktopNavLinks';
import {Link} from 'react-router-dom';

const Navlinks = ({isMenuOpen, toggleMenuOpen, laptop}) => {
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

export default Navlinks;
