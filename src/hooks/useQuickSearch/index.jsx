import {useEffect, useState, useContext} from 'react';
import api from '../../api/axiosConfig';
import axios from 'axios';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';

const useQuickSearch = query => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [autoCompleted, setAutoCompleted] = useState(false);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setMovies([]);
  }, [query, language]);

  useEffect(() => {
    if (query.length > 3) {
      setLoading(true);
      let cancel;
      api
        .get(`search/movie`, {
          params: {query},
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        })
        .then(res => {
          const {results} = res.data;
          setMovies(results.slice(0, 5));
          setLoading(false);
          setAutoCompleted(true);
        })
        .catch(handleError);
      return () => cancel();
    } else {
      setMovies([]);
      setAutoCompleted(false);
    }
  }, [query, language]);

  return {loading, movies, autoCompleted};
};

export default useQuickSearch;
