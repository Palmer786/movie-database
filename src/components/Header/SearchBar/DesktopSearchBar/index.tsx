import React, {useState, useRef} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  autoCompleted: boolean;
  movies: Movie[];
  loading: boolean;
}

interface Movie {
  id: number;
  title: string;
}

const DesktopSearchBar: React.FC<Props> = ({
  query,
  setQuery,
  autoCompleted,
  movies,
  loading,
}) => {
  const [isFocused, toggleFocus] = useState(false);
  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setQuery('');
    toggleFocus(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    inputRef.current.focus();
  };

  const handleLinkOnClick = () => toggleFocus(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const handleOnFocus = () => toggleFocus(true);

  const onBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) return toggleFocus(false);
    return toggleFocus(true);
  };

  return (
    <div className="search-bar" onBlur={onBlur}>
      <>
        <div className="search-bar-container">
          <div className="search-icon-container">
            <SearchIcon fontSize="large" />
          </div>
          <input
            type="text"
            placeholder={intl.formatMessage({
              id: 'search.placeholder',
              defaultMessage: 'Search for a movie...',
            })}
            value={query}
            onChange={handleChange}
            onFocus={() => handleOnFocus()}
            ref={inputRef}
          />
          <div
            className="clear-search"
            style={
              autoCompleted ? {visibility: 'visible'} : {visibility: 'hidden'}
            }
            onClick={() => clearInput()}
          >
            <ClearIcon fontSize="small" />
          </div>
        </div>
        <div
          className="suggestions"
          style={
            autoCompleted && isFocused ? undefined : {visibility: 'hidden'}
          }
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
