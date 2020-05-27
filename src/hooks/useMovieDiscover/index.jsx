import {useEffect, useState, useContext} from 'react';
import api from '../../api/axiosConfig';
import axios from 'axios';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';

const useMovieDiscover = (year, pageNumber, selectedGenre, sortBy) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState('');
  const [hasMore, setHasMore] = useState(false);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setMovies([]);
  }, [year, selectedGenre, sortBy, language]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    api
      .get(`/discover/movie`, {
        params: {
          year,
          page: pageNumber,
          sort_by: sortBy,
          with_genres: selectedGenre,
        },
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        const {total_results, results} = res.data;
        setMovies(prevMovies => [...prevMovies, ...results]);
        setLoading(false);
        setHasMore(results.length > 0);
        setTotalResults(total_results);
      })
      .catch(handleError);
    return () => cancel();
  }, [year, pageNumber, sortBy, selectedGenre, language]);

  return {loading, movies, totalResults, hasMore};
};

export default useMovieDiscover;
