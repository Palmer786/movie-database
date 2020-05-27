import {useEffect, useState, useContext} from 'react';
import api from '../../api/axiosConfig';
import axios from 'axios';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';

const useQuickSearch = (query, year, pageNumber) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState('');
  const [hasMore, setHasMore] = useState(false);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setMovies([]);
  }, [query, year, language]);

  useEffect(() => {
    if (query.length > 1) {
      setLoading(true);
      let cancel;
      api
        .get(`search/movie`, {
          params: {query, year, page: pageNumber},
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
    }
  }, [query, year, pageNumber, language]);

  return {loading, movies, totalResults, hasMore};
};

export default useQuickSearch;
