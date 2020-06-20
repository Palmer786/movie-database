import React, {useContext, useEffect} from 'react';
import MovieElement from './MovieElement';
import {DisplayContext} from '../../contexts/DisplayContext';

interface Props {
  movies: Movie[];
  lastMovieElementRef: Observer;
}

export type lastMovieElementRef = (node: Element) => void;

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
