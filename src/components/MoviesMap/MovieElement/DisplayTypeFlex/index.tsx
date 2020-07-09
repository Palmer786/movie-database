import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import getImage from '../../../../utils/getImage';
import {Movie} from '../../index';
import styled from 'styled-components';
import LoadingSpinner from '../../../LoadingSpinner';

interface Props {
  movie: Movie;
  observer: Observer;
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

const DisplayTypeFlex: React.FC<Props> = ({movie, observer, newTitle}) => {
  const {vote_average, poster_path, id, release_date, overview} = movie;
  const [isImageLoaded, toggleImageLoaded] = useState(false);

  const handleOnLoad = () => toggleImageLoaded(true);

  return (
    <Link to={`/movie/${id}`}>
      <div ref={observer} className="movie-element-flex">
        <div className="movie-image-flex">
          <MovieImage
            isImageLoaded={isImageLoaded}
            src={getImage(poster_path)}
            alt="movieImage"
            onLoad={() => handleOnLoad()}
          />
          {!isImageLoaded && <LoadingSpinner />}
        </div>
        <div className="movie-details-flex">
          <div className="title-flex">
            <p className="title">{newTitle}</p>
            <p>
              {overview ? (
                overview
              ) : (
                <FormattedMessage
                  id="no.description"
                  defaultMessage="No description"
                />
              )}
            </p>
            <i>{release_date}</i>
          </div>
          <div className="vote-average-flex">
            <h4>{vote_average}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DisplayTypeFlex;
