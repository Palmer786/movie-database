import React from 'react';
import SearchIcon from '../../../images/search.png';

interface Props {
  phone: boolean;
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
}

const SearchBarButton: React.FC<Props> = ({
  phone,
  toggleMenuOpen,
  toggleSearchOpen,
  isSearchOpen,
}) => {
  return (
    <>
      {phone && (
        <div
          className="searchbar-icon"
          onClick={() => {
            toggleSearchOpen(!isSearchOpen);
            toggleMenuOpen(false);
          }}
        >
          <img src={SearchIcon} alt="search icon" />
        </div>
      )}
    </>
  );
};

export default SearchBarButton;
