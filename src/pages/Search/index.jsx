import React, {useState, useEffect} from 'react';
import MoviesMap from '../../components/MoviesMap';
import {useLocation} from 'react-router-dom';
import useMovieSearch from '../../hooks/useMovieSearch';
import useInfinityScroller from '../../hooks/useInfinityScroller';
import DisplayType from '../../components/DisplayType';
import LoadingSpinner from '../../components/LoadingSpinner';
import SearchResults from '../../components/SearchResults';
import SearchOptions from './SearchOptions';

const Search = () => {
  const location = useLocation();

  const [pageNumber, setPageNumber] = useState(1);
  const [year, setYear] = useState('');
  const [query, setQuery] = useState(
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
        />
        <SearchResults totalResults={totalResults} />
        <DisplayType />
      </div>
      <MoviesMap movies={movies} lastMovieElementRef={lastMovieElementRef} />
      <LoadingSpinner loading={loading} />
    </div>
  );
};

export default Search;
