import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

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
    toggleMenuOpen(!isMenuOpen);
    toggleSearchOpen(false);
  };
  return (
    <>
      {laptop && (
        <div className="menu-icon">
          <MenuIcon style={{fontSize: '32px'}} onClick={handleOnClick} />
        </div>
      )}
    </>
  );
};

export default MenuButton;
