import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

interface Props {
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
}

const SearchBarButton: React.FC<Props> = ({
  toggleMenuOpen,
  toggleSearchOpen,
  isSearchOpen,
}) => {
  const handleSearchOpen = () => {
    toggleSearchOpen(true);
    toggleMenuOpen(false);
  };

  const handleSearchClose = () => toggleSearchOpen(false);

  return (
    <div className="searchbar-icon">
      {!isSearchOpen ? (
        <SearchIcon onClick={() => handleSearchOpen()} />
      ) : (
        <ClearIcon onClick={() => handleSearchClose()} />
      )}
    </div>
  );
};

export default SearchBarButton;
