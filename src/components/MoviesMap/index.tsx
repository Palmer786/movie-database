import React, {useContext, useEffect} from 'react';
import MovieElement from './MovieElement';
import {DisplayContext} from '../../contexts/DisplayContext';
import {ResolutionContext} from '../../contexts/ResolutionContext';

interface Props {
  movies: Movie[];
  lastMovieElementRef: Observer;
}

export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  overview: string;
}

type Observer =
  | string
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;

const MoviesMap: React.FC<Props> = ({movies, lastMovieElementRef}) => {
  const [displayType, setDisplayType] = useContext(DisplayContext);
  const {laptop} = useContext(ResolutionContext);

  useEffect(() => {
    if (laptop) setDisplayType('grid');
  }, [laptop]);

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
