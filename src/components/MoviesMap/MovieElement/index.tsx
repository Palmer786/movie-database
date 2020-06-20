import React from 'react';
import DisplayTypeGrid from './DisplayTypeGrid';
import DisplayTypeFlex from './DisplayTypeFlex';
import {Movie} from '../index';

interface Props {
  movie: Movie;
  observer?: Observer;
  displayType: string;
}

type Observer =
  | string
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;

const MovieElement: React.FC<Props> = ({movie, observer, displayType}) => {
  const {title} = movie;

  const getTitle = (title: string): string => {
    if (title.length > 30 && displayType === 'grid')
      return `${title.slice(0, 30)}...`;
    return title;
  };

  const newTitle = getTitle(title);

  if (displayType === 'grid')
    return (
      <DisplayTypeGrid movie={movie} observer={observer} newTitle={newTitle} />
    );

  if (displayType === 'flex')
    return (
      <DisplayTypeFlex movie={movie} observer={observer} newTitle={newTitle} />
    );
  return null;
};

export default MovieElement;
