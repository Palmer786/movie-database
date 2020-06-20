import React from 'react';
import {useIntl} from 'react-intl';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  year: number | undefined;
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const SearchOptions: React.FC<Props> = ({query, setQuery, year, setYear}) => {
  const intl = useIntl();

  const queryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const yearChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(+e.target.value);

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
