import React from 'react';

const MenuButton = ({toggleMenuOpen, toggleSearchOpen, isMenuOpen, laptop}) => {
  const handleOnClick = () => {
    document.body.style.overflow = isMenuOpen ? 'visible' : 'hidden';
    toggleMenuOpen(!isMenuOpen);
    toggleSearchOpen(false);
  };
  return (
    <>
      {laptop && (
        <div className="menu-icon" onClick={handleOnClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
    </>
  );
};

export default MenuButton;
