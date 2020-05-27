import React, {useState, useEffect, useContext} from 'react';
import api from '../../api/axiosConfig';
import MoviesMap from '../../components/MoviesMap';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';
import useMovieDiscover from '../../hooks/useMovieDiscover';
import useInfinityScroller from '../../hooks/useInfinityScroller';
import {useIntl} from 'react-intl';
import SortOptions from './SortOptions';
import DisplayType from '../../components/DisplayType';
import LoadingSpinner from '../../components/LoadingSpinner';
import SearchResults from '../../components/SearchResults';
import GenreSelect from './GenreSelect';

const Discover = () => {
  const [genres, setGenres] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [year, setYear] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [language] = useContext(LanguageContext);
  const intl = useIntl();

  const fetchGenres = () => {
    api
      .get('/genre/movie/list')
      .then(res => setGenres(res.data.genres))
      .catch(handleError);
  };

  useEffect(() => {
    fetchGenres();
  }, [language]);

  const {loading, totalResults, movies, hasMore} = useMovieDiscover(
    year,
    pageNumber,
    selectedGenre,
    sortBy,
  );

  const lastMovieElementRef = useInfinityScroller(
    loading,
    hasMore,
    setPageNumber,
  );

  useEffect(() => {
    setPageNumber(1);
  }, [year, sortBy, selectedGenre, language]);

  const handleChange = e => setYear(e.target.value);

  return (
    <div className="main-wrapper">
      <div className="discover-menu">
        <div className="search-options">
          <GenreSelect
            genres={genres}
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
          <input
            type="text"
            value={year}
            placeholder={intl.formatMessage({
              id: 'input.year',
              defaultMessage: 'Year...',
            })}
            onChange={handleChange}
          />
          <SortOptions value={sortBy} onChange={setSortBy} />
        </div>
        <SearchResults totalResults={totalResults} />
        <DisplayType />
      </div>

      <MoviesMap movies={movies} lastMovieElementRef={lastMovieElementRef} />

      <LoadingSpinner loading={loading} />
    </div>
  );
};

export default Discover;
