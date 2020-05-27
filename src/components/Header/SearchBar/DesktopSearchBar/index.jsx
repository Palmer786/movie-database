import React, {useState} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {Link} from 'react-router-dom';

const DesktopSearchBar = ({
  query,
  setQuery,
  autoCompleted,
  movies,
  loading,
}) => {
  const [isFocused, toggleFocus] = useState(false);
  const intl = useIntl();

  const handleLinkOnClick = () => toggleFocus(false);

  const onBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) return toggleFocus(false);
    return toggleFocus(true);
  };

  return (
    <div className="search-bar" onBlur={onBlur}>
      <>
        <input
          type="text"
          placeholder={intl.formatMessage({
            id: 'search.placeholder',
            defaultMessage: 'Search for a movie...',
          })}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => toggleFocus(true)}
        />
        <div
          className="suggestions"
          style={autoCompleted && isFocused ? null : {visibility: 'hidden'}}
        >
          {movies.map(movie => {
            const {id, title} = movie;

            return (
              <Link
                to={{
                  pathname: `/movie/${id}`,
                  state: {id},
                }}
                onClick={handleLinkOnClick}
                key={id}
                className="suggested-element"
              >
                {title}
              </Link>
            );
          })}
          {movies.length > 0 && (
            <Link
              to={{
                pathname: '/search',
                state: {query},
              }}
              className="show-all"
              onClick={handleLinkOnClick}
            >
              <h4>
                <FormattedMessage
                  id="searchbar.show_all"
                  defaultMessage="Show all"
                />
              </h4>
            </Link>
          )}
          {loading && (
            <h4>
              <FormattedMessage id="loading" defaultMessage="Loading..." />
            </h4>
          )}
          {!movies.length && query.length > 3 && !loading && (
            <h4>
              <FormattedMessage
                id="search.no_results"
                defaultMessage="No results"
              />
            </h4>
          )}
        </div>
      </>
    </div>
  );
};

export default DesktopSearchBar;
