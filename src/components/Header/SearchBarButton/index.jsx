import React from 'react';
import SearchIcon from '../../../images/search.png';

const SearchBarButton = ({
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
