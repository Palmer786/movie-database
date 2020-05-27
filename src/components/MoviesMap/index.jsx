import React, {useContext, useEffect} from 'react';
import MovieElement from './MovieElement';
import {DisplayContext} from '../../contexts/DisplayContext';

const MoviesMap = ({movies, lastMovieElementRef}) => {
  const [displayType, setDisplayType] = useContext(DisplayContext);
  useEffect(() => {
    window.addEventListener('resize', () => {
      const laptop = window.matchMedia('(max-width: 1024px)').matches;
      if (laptop) setDisplayType('grid');
    });
  }, []);
  return (
    <div className={displayType === 'grid' ? 'main-grid' : 'main-flex'}>
      {movies.map((movie, index) => {
        const {id} = movie;
        return (
          <MovieElement
            {...(movies.length === index + 1
              ? {observer: lastMovieElementRef}
              : null)}
            key={id}
            movie={movie}
            displayType={displayType}
          />
        );
      })}
    </div>
  );
};

export default MoviesMap;
