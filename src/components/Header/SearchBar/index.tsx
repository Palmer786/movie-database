import React, {useState} from 'react';
import useMovieSearch from '../../../hooks/useQuickSearch';
import MobileSearchBar from './MobileSearchBar';
import DesktopSearchBar from './DesktopSearchBar';

interface Props {
  isSearchOpen: boolean;
  phone: boolean;
  toggleSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({
  isSearchOpen,
  phone,
  toggleSearchOpen,
}) => {
  const [query, setQuery] = useState('');
  const {loading, movies, autoCompleted} = useMovieSearch(query);

  if (phone)
    return (
      <MobileSearchBar
        isSearchOpen={isSearchOpen}
        query={query}
        setQuery={setQuery}
        movies={movies}
        loading={loading}
        toggleSearchOpen={toggleSearchOpen}
      />
    );
  return (
    <DesktopSearchBar
      query={query}
      setQuery={setQuery}
      autoCompleted={autoCompleted}
      movies={movies}
      loading={loading}
    />
  );
};

export default SearchBar;
