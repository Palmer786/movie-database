import React, {useState, useRef, SyntheticEvent} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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

interface ClearSearchWrapper {
  autoCompleted: boolean;
}

interface SuggestionsWrapper {
  autoCompleted: boolean;
  isFocused: boolean;
}

const ClearSearchWrapper = styled.div`
  visibility: ${({autoCompleted}: ClearSearchWrapper) =>
    autoCompleted ? 'visible' : 'hidden'};
`;

const SuggestionsWrapper = styled.div`
  visibility: ${({autoCompleted, isFocused}: SuggestionsWrapper) =>
    autoCompleted && isFocused ? 'visible' : 'hidden'};
`;

const DesktopSearchBar: React.FC<Props> = ({
  query,
  setQuery,
  autoCompleted,
  movies,
  loading,
}) => {
  const [isFocused, toggleFocus] = useState(false);
  const intl = useIntl();
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setQuery('');
    toggleFocus(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    inputRef.current.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      history.push('/search', {query});
      toggleFocus(false);
    }
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
            onKeyUp={handleKeyPress}
          />
          <ClearSearchWrapper
            className="clear-search"
            autoCompleted={autoCompleted}
            onClick={() => clearInput()}
          >
            <ClearIcon fontSize="small" />
          </ClearSearchWrapper>
        </div>
        <SuggestionsWrapper
          className="suggestions"
          autoCompleted={autoCompleted}
          isFocused={isFocused}
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
        </SuggestionsWrapper>
      </>
    </div>
  );
};

export default DesktopSearchBar;
