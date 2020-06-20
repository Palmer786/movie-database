import React, {useEffect, useState} from 'react';
import MoviesMap from '../../components/MoviesMap';
import {useParams} from 'react-router-dom';
import useFetchMovieList from '../../hooks/useFetchMovieList';
import useInfinityScroller from '../../hooks/useInfinityScroller';
import LoadingSpinner from '../../components/LoadingSpinner';
import TabMenu from './TabMenu';

interface Params {
  endpoint: string;
}

const List: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const params: Params = useParams();

  const navLinks = ['popular', 'top_rated', 'upcoming'];
  const findEndpoint = () => {
    const endpoint = navLinks.filter(link => link === params.endpoint);
    return endpoint[0];
  };

  const currentEndpoint = findEndpoint();
  if (currentEndpoint === undefined) {
    window.location.href = '/404';
  }

  useEffect(() => {
    setPageNumber(1);
  }, [params]);

  const {movies, hasMore, loading} = useFetchMovieList(
    pageNumber,
    currentEndpoint,
    params,
  );

  const lastMovieElementRef = useInfinityScroller(
    loading,
    hasMore,
    setPageNumber,
  );

  return (
    <div className="main-wrapper">
      <TabMenu links={navLinks} />
      <MoviesMap movies={movies} lastMovieElementRef={lastMovieElementRef} />
      <LoadingSpinner loading={loading} />
    </div>
  );
};

export default List;
