import React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {Link} from 'react-router-dom';

const MobileSearchBar = ({
  isSearchOpen,
  query,
  setQuery,
  movies,
  loading,
  toggleSearchOpen,
}) => {
  const intl = useIntl();

  const handleMobileLinkOnClick = () => toggleSearchOpen(false);

  return (
    <div
      className={isSearchOpen ? 'sidebar-search search-open' : 'sidebar-search'}
    >
      <div
        className={
          isSearchOpen ? 'mobile-search search-visible' : 'mobile-search'
        }
      >
        <div className="mobile-search-bar">
          <>
            <input
              type="text"
              placeholder={intl.formatMessage({
                id: 'search.placeholder',
                defaultMessage: 'Search for a movie...',
              })}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <div className="mobile-suggestions">
              {movies.map(movie => {
                const {id, title} = movie;

                return (
                  <Link
                    to={{
                      pathname: `/movie/${id}`,
                      state: {id},
                    }}
                    onClick={handleMobileLinkOnClick}
                    key={id}
                    className="mobile-suggested-element"
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
                  className="mobile-show-all"
                  onClick={handleMobileLinkOnClick}
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
      </div>
    </div>
  );
};

export default MobileSearchBar;
