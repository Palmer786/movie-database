import React from 'react';
import {FormattedMessage} from 'react-intl';

const LoadingSpinner = ({loading}) => {
  return (
    <>
      {loading && (
        <div className="loading-container">
          <div className="spinner">
            <div className="spinner-text">
              <FormattedMessage id="loading" defaultMessage="Loading..." />
            </div>
            <div className="spinner-section blue"></div>
            <div className="spinner-section red"></div>
            <div className="spinner-section yellow"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
