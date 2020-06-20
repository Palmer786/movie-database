import {useEffect, useState, useContext} from 'react';
import api from '../../api/axiosConfig';
import axios, {Canceler} from 'axios';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';

interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

interface Return {
  loading: boolean;
  movies: Movie[];
  autoCompleted: boolean;
}

const useQuickSearch = (query: string): Return => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [autoCompleted, setAutoCompleted] = useState<boolean>(false);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setMovies([]);
  }, [query, language]);

  useEffect(() => {
    if (query.length > 3) {
      setLoading(true);
      let cancel: Canceler;
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
