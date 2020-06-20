import React from 'react';
import Genres from './Genres';
import {FormattedMessage} from 'react-intl';
import {Data} from '../index';

interface Props extends Data {
  data: Data;
}

interface BackgroundImage {
  backgroundImage: string;
}

interface Background {
  background: string;
}

type ImageBackground = BackgroundImage | Background;

const HeaderDetails: React.FC<Props> = ({data}) => {
  const {
    title,
    vote_count,
    vote_average,
    genres,
    tagline,
    original_title,
    backdrop_path,
  } = data;

  const getBackdropImage = (path?: string): ImageBackground => {
    if (!path) return {background: 'black'};
    return {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${path})`,
    };
  };

  return (
    <div className="header-container">
      <div className="header-wrapper" style={getBackdropImage(backdrop_path)}>
        <div className="header-details">
          <h1>{title}</h1>
          <h4>{tagline}</h4>
          <span>
            <p>{original_title}</p>
            <Genres genres={genres} />
          </span>
          <div className="vote-numbers">
            <p>
              <FormattedMessage
                id="details.vote"
                defaultMessage="Number of votes"
              />
              <span>{vote_count}</span>
            </p>
            <h2>{vote_average}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
