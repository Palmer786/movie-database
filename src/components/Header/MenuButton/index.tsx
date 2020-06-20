import React from 'react';

interface Props {
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  laptop: boolean;
}

const MenuButton: React.FC<Props> = ({
  toggleMenuOpen,
  toggleSearchOpen,
  isMenuOpen,
  laptop,
}) => {
  const handleOnClick = () => {
    document.body.style.overflow = isMenuOpen ? 'visible' : 'hidden';
    toggleMenuOpen(!isMenuOpen);
    toggleSearchOpen(false);
  };
  return (
    <>
      {laptop && (
        <div className="menu-icon" onClick={handleOnClick}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
    </>
  );
};

export default MenuButton;
