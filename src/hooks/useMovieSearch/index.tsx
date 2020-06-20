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
  hasMore: boolean;
  totalResults: number | undefined;
}

const useQuickSearch = (
  query: string,
  year: number | undefined,
  pageNumber: number,
): Return => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number | undefined>(
    undefined,
  );
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setMovies([]);
  }, [query, year, language]);

  useEffect(() => {
    if (query.length > 1) {
      setLoading(true);
      let cancel: Canceler;
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
