import React from 'react';
import {FormattedMessage} from 'react-intl';

interface Props {
  loading: boolean;
}

const LoadingSpinner: React.FC<Props> = ({loading}) => {
  return (
    <>
      {loading && (
        <div className="loading-container">
          <div className="spinner">
            <div className="spinner-text">
              <FormattedMessage id="loading" defaultMessage="Loading..." />
            </div>
            <div className="spinner-section blue" />
            <div className="spinner-section red" />
            <div className="spinner-section yellow" />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
