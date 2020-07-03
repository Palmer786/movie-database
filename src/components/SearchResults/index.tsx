import React from 'react';
import {FormattedMessage} from 'react-intl';

interface Props {
  totalResults: number | undefined;
}

const SearchResults: React.FC<Props> = ({totalResults}) => {
  return (
    <>
      {totalResults ? (
        <div className="search-results">
          {totalResults! > 500 ? (
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
          ) : (
            undefined
          )}
        </div>
      ) : (
        <div className="search-results">
          <h4>
            <FormattedMessage
              id="search.no_results"
              defaultMessage="No results"
            />
          </h4>
        </div>
      )}
    </>
  );
};

export default SearchResults;
