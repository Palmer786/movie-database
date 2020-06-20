import React from 'react';
import {Link} from 'react-router-dom';
import getImage from '../../../../utils/getImage';
import {Movie} from '../../index';

interface Props {
  movie: Movie;
  observer?: Observer;
  newTitle: string;
}

type Observer =
  | string
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;

const DisplayTypeGrid: React.FC<Props> = ({movie, observer, newTitle}) => {
  const {vote_average, poster_path, id, release_date} = movie;

  return (
    <Link to={`/movie/${id}`}>
      <div ref={observer} className="movie-element-grid">
        <div className="movie-image-grid">
          <img src={getImage(poster_path)} alt="movie" />
        </div>
        <div className="movie-details-grid">
          <div className="title-grid">
            <p>{newTitle}</p>
            <i>{release_date}</i>
          </div>
          <div className="vote-average-grid">
            <h4>{vote_average}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DisplayTypeGrid;
