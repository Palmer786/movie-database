import React from 'react';
import {useIntl} from 'react-intl';
import YearPicker from '../../../components/YearPicker';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  year: number | undefined;
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
  isYearPickerOpen: boolean;
  toggleYearPicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchOptions: React.FC<Props> = ({
  query,
  setQuery,
  year,
  setYear,
  isYearPickerOpen,
  toggleYearPicker,
}) => {
  const intl = useIntl();

  const queryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

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
      <YearPicker
        year={year}
        setYear={setYear}
        isYearPickerOpen={isYearPickerOpen}
        toggleYearPicker={toggleYearPicker}
      />
    </div>
  );
};

export default SearchOptions;
