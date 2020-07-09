import React, {useState, useEffect} from 'react';
import SelectLanguage from './SelectLanguage';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import SearchBarButton from './SearchBarButton';
import MenuButton from './MenuButton';

const Header: React.FC = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [isSearchOpen, toggleSearchOpen] = useState(false);
  const laptopResolution = window.matchMedia('(max-width:1024px)').matches;
  const phoneResolution = window.matchMedia('(max-width:786px)').matches;
  const [isMobile, toggleMobile] = useState({
    laptop: laptopResolution,
    phone: phoneResolution,
  });
  const {laptop, phone} = isMobile;

  useEffect(() => {
    window.addEventListener('resize', () => {
      const laptop = window.matchMedia('(max-width:1024px)').matches;
      const phone = window.matchMedia('(max-width:786px)').matches;
      toggleMobile({laptop, phone});
    });
  }, []);

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
        <SearchBarButton
          phone={phone}
          toggleMenuOpen={toggleMenuOpen}
          toggleSearchOpen={toggleSearchOpen}
          isSearchOpen={isSearchOpen}
        />
        <MenuButton
          isMenuOpen={isMenuOpen}
          laptop={laptop}
          toggleMenuOpen={toggleMenuOpen}
          toggleSearchOpen={toggleSearchOpen}
        />
        <SelectLanguage laptop={laptop} />
      </nav>
    </header>
  );
};

export default Header;
