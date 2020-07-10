import {useEffect, useState, useContext} from 'react';
import api from '../../api/axiosConfig';
import axios, {Canceler} from 'axios';
import {LanguageContext} from '../../contexts/LanguageContext';
import handleError from '../../utils/handleError';

interface Params {
  endpoint: string;
}

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
  hasMore: boolean;
}

const useFetchMovieList = (
  pageNumber: number,
  endpoint: string,
  params: Params,
): Return => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setMovies([]);
  }, [params, language]);

  useEffect(() => {
    setLoading(true);
    let cancel: Canceler;
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
