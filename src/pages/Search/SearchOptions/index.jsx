import React from 'react';
import {useIntl} from 'react-intl';

const SearchOptions = ({query, setQuery, year, setYear}) => {
  const intl = useIntl();

  const queryChange = e => setQuery(e.target.value);

  const yearChange = e => setYear(e.target.value);

  return (
    <div className="search-options">
      <input
        type="text"
        placeholder={intl.formatMessage({
          id: 'input.search',
          defaultMessage: 'Search...',
        })}
        value={query}
        onChange={queryChange}
      />
      <input
        type="text"
        placeholder={intl.formatMessage({
          id: 'input.year',
          defaultMessage: 'Year...',
        })}
        value={year}
        onChange={yearChange}
      />
    </div>
  );
};

export default SearchOptions;
