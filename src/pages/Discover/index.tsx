import React, {useState, useEffect, useContext} from 'react';
import api from '../../api/axiosConfig';
import MoviesMap from '../../components/MoviesMap';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';
import useMovieDiscover from '../../hooks/useMovieDiscover';
import useInfinityScroller from '../../hooks/useInfinityScroller';
import SortOptions from './SortOptions';
import DisplayType from '../../components/DisplayType';
import Loading from '../../components/Loading';
import SearchResults from '../../components/SearchResults';
import GenreSelect from './GenreSelect';
import YearPicker from '../../components/YearPicker';

const Discover: React.FC = () => {
  const [genres, setGenres] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isYearPickerOpen, toggleYearPicker] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [year, setYear] = useState<number | undefined>(undefined);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [language] = useContext(LanguageContext);

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

  return (
    <div className="main-wrapper">
      <div className="discover-menu">
        <div className="search-options">
          <GenreSelect
            genres={genres}
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
          <YearPicker
            year={year}
            setYear={setYear}
            isYearPickerOpen={isYearPickerOpen}
            toggleYearPicker={toggleYearPicker}
          />
          <SortOptions value={sortBy} onChange={setSortBy} />
        </div>
        <SearchResults totalResults={totalResults} />
        <DisplayType />
      </div>
      <MoviesMap movies={movies} lastMovieElementRef={lastMovieElementRef} />
      {loading && <Loading />}
    </div>
  );
};

export default Discover;
