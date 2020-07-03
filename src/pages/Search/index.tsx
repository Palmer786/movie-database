import React, {useState, useEffect} from 'react';
import MoviesMap from '../../components/MoviesMap';
import {useLocation} from 'react-router-dom';
import useMovieSearch from '../../hooks/useMovieSearch';
import useInfinityScroller from '../../hooks/useInfinityScroller';
import DisplayType from '../../components/DisplayType';
import Loading from '../../components/Loading';
import SearchResults from '../../components/SearchResults';
import SearchOptions from './SearchOptions';

interface Location {
  query: string;
}

const Search: React.FC = () => {
  const location = useLocation<Location>();

  const [pageNumber, setPageNumber] = useState(1);
  const [year, setYear] = useState<number | undefined>(undefined);
  const [isYearPickerOpen, toggleYearPicker] = useState(false);
  const [query, setQuery] = useState<string>(
    location.state ? location.state.query : '',
  );

  const {loading, totalResults, movies, hasMore} = useMovieSearch(
    query,
    year,
    pageNumber,
  );

  const lastMovieElementRef = useInfinityScroller(
    loading,
    hasMore,
    setPageNumber,
  );

  useEffect(() => {
    if (location.state?.query) return setQuery(location.state.query);
  }, [location]);

  useEffect(() => {
    setPageNumber(1);
  }, [query, year]);

  return (
    <div className="main-wrapper">
      <div className="search-menu">
        <SearchOptions
          query={query}
          setQuery={setQuery}
          year={year}
          setYear={setYear}
          isYearPickerOpen={isYearPickerOpen}
          toggleYearPicker={toggleYearPicker}
        />
        <SearchResults totalResults={totalResults} />
        <DisplayType />
      </div>
      <MoviesMap movies={movies} lastMovieElementRef={lastMovieElementRef} />
      {loading && <Loading />}
    </div>
  );
};

export default Search;
