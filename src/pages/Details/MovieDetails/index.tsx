import React from 'react';
import {FormattedMessage} from 'react-intl';
import getImage from '../../../utils/getImage';
import {Data} from '../index';

interface Props {
  data: Data;
}

const MovieDetails: React.FC<Props> = ({data}) => {
  const {
    original_language,
    release_date,
    overview,
    poster_path,
    budget,
    runtime,
  } = data;

  const getRuntime = (number?: number): string => {
    const hours = number! / 60;
    const rHours = Math.floor(hours);
    const minutes = (hours - rHours) * 60;
    const rMinutes = Math.round(minutes);
    return `${rHours}h. ${rMinutes}min.`;
  };

  const getBudget = (budget: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(budget);

  return (
    <div className="main-wrapper">
      <div className="main-details-wrapper">
        <img src={getImage(poster_path)} alt="" />
        <div className="movie-details">
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
          <p>
            <span>
              <FormattedMessage
                id="details.language"
                defaultMessage="language: "
              />
            </span>
            {original_language}
          </p>
          <p>
            <span>
              <FormattedMessage
                id="details.runtime"
                defaultMessage="duration: "
              />
            </span>
            {getRuntime(runtime)}
          </p>
          {budget ? (
            <p>
              <span>
                <FormattedMessage
                  id="details.budget"
                  defaultMessage="budget: "
                />
              </span>
              {getBudget(budget)}
            </p>
          ) : null}
          <p>
            <span>
              <FormattedMessage
                id="details.date"
                defaultMessage="release date: "
              />
            </span>
            {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
