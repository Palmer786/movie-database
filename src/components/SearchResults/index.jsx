import React from 'react';
import {FormattedMessage} from 'react-intl';

const SearchResults = ({totalResults}) => {
  return (
    <>
      {totalResults && (
        <div className="search-results">
          {totalResults > 500 ? (
            <h4>
              <FormattedMessage
                id="search.found.more"
                defaultMessage={`more than 500 search results found`}
              />
            </h4>
          ) : totalResults ? (
            <h4>
              <FormattedMessage
                id="search.found"
                values={{totalResults}}
                defaultMessage={`${totalResults} search results found...`}
              />
            </h4>
          ) : totalResults === 0 ? (
            <h4>
              <FormattedMessage
                id="search.no_results"
                defaultMessage="No results"
              />
            </h4>
          ) : null}
        </div>
      )}
    </>
  );
};

export default SearchResults;