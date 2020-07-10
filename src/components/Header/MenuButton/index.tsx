import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const MenuButton: React.FC<Props> = ({
  toggleMenuOpen,
  toggleSearchOpen,
  isMenuOpen,
}) => {
  const handleOnClick = () => {
    toggleMenuOpen(!isMenuOpen);
    toggleSearchOpen(false);
  };

  return (
    <div className="menu-icon">
      <MenuIcon onClick={() => handleOnClick()} />
    </div>
  );
};

export default MenuButton;
