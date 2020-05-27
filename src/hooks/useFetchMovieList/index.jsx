import {useEffect, useState, useContext} from 'react';
import api from '../../api/axiosConfig';
import axios from 'axios';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';

const useFetchMovieList = (pageNumber, endpoint, params) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [language] = useContext(LanguageContext);
  useEffect(() => {
    setMovies([]);
  }, [params, language]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    api
      .get(`movie/${endpoint}?`, {
        params: {page: pageNumber},
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setMovies(prevMovies => [...prevMovies, ...res.data.results]);
        setLoading(false);
        setHasMore(res.data.results.length > 0);
      })
      .catch(handleError);
    return () => cancel();
  }, [pageNumber, params, language]);

  return {loading, movies, hasMore};
};

export default useFetchMovieList;
