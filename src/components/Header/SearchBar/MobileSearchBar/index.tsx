import React, {useRef, useEffect} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {Link} from 'react-router-dom';

interface Props {
  isSearchOpen: boolean;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  movies: Movie[];
  loading: boolean;
  toggleSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Movie {
  id: number;
  title: string;
}

const MobileSearchBar: React.FC<Props> = ({
  isSearchOpen,
  query,
  setQuery,
  movies,
  loading,
  toggleSearchOpen,
}) => {
  const intl = useIntl();
  const inputRef = useRef(null);

  const handleMobileLinkOnClick = () => toggleSearchOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const onBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget))
      return toggleSearchOpen(false);
  };

  useEffect(() => {
    if (isSearchOpen) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return inputRef.current.focus();
    } else {
      toggleSearchOpen(false);
    }
  }, [isSearchOpen]);

  return (
    <div
      className={isSearchOpen ? 'sidebar-search search-open' : 'sidebar-search'}
    >
      <div
        className={
          isSearchOpen ? 'mobile-search search-visible' : 'mobile-search'
        }
      >
        <div className="mobile-search-bar" onBlur={onBlur}>
          <>
            <input
              type="text"
              placeholder={intl.formatMessage({
                id: 'search.placeholder',
                defaultMessage: 'Search for a movie...',
              })}
              value={query}
              ref={inputRef}
              onChange={handleChange}
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
