import React from 'react';
import MobileNavLinks from './MobileNavLinks';
import DesktopNavLinks from './DesktopNavLinks';

const Navlinks = ({isMenuOpen, toggleMenuOpen, laptop}) => {
  return (
    <>
      <div className="logo">
        <h4>
          <h1>MovieDB</h1>
        </h4>
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
