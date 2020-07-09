import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import getImage from '../../../../utils/getImage';
import {Movie} from '../../index';
import LoadingSpinner from '../../../LoadingSpinner';
import styled from 'styled-components';

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

interface MovieImage {
  isImageLoaded: boolean;
}

const MovieImage = styled.img`
  display: ${(props: MovieImage) => (props.isImageLoaded ? '' : 'none')};
`;

const DisplayTypeGrid: React.FC<Props> = ({movie, observer, newTitle}) => {
  const {vote_average, poster_path, id, release_date} = movie;
  const [isImageLoaded, toggleImageLoaded] = useState(false);

  const handleOnLoad = () => toggleImageLoaded(true);

  return (
    <Link to={`/movie/${id}`}>
      <div ref={observer} className="movie-element-grid">
        <div className="movie-image-grid">
          <MovieImage
            isImageLoaded={isImageLoaded}
            src={getImage(poster_path)}
            alt="movieImage"
            onLoad={() => handleOnLoad()}
          />
          {!isImageLoaded && <LoadingSpinner />}
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
