import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

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
  const handleSearchOpen = () => {
    toggleSearchOpen(true);
    toggleMenuOpen(false);
  };

  const handleSearchClose = () => toggleSearchOpen(false);

  return (
    <>
      {phone && (
        <div className="searchbar-icon">
          {!isSearchOpen ? (
            <SearchIcon
              style={{fontSize: '32px', order: 3}}
              onClick={() => handleSearchOpen()}
            />
          ) : (
            <ClearIcon
              style={{fontSize: '32px', order: 3}}
              onClick={() => handleSearchClose()}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SearchBarButton;
