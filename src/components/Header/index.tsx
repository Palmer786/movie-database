import React, {useState, useContext} from 'react';
import SelectLanguage from './SelectLanguage';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import SearchBarButton from './SearchBarButton';
import MenuButton from './MenuButton';
import {ResolutionContext} from '../../contexts/ResolutionContext';

const Header: React.FC = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [isSearchOpen, toggleSearchOpen] = useState(false);
  const {laptop, phone} = useContext(ResolutionContext);

  return (
    <header>
      <nav>
        <NavLinks
          isMenuOpen={isMenuOpen}
          toggleMenuOpen={toggleMenuOpen}
          laptop={laptop}
        />
        <SearchBar
          isSearchOpen={isSearchOpen}
          toggleSearchOpen={toggleSearchOpen}
          phone={phone}
        />
        {phone && (
          <SearchBarButton
            toggleMenuOpen={toggleMenuOpen}
            toggleSearchOpen={toggleSearchOpen}
            isSearchOpen={isSearchOpen}
          />
        )}
        {laptop && (
          <MenuButton
            isMenuOpen={isMenuOpen}
            toggleMenuOpen={toggleMenuOpen}
            toggleSearchOpen={toggleSearchOpen}
          />
        )}
        {!laptop && <SelectLanguage />}
      </nav>
    </header>
  );
};

export default Header;
