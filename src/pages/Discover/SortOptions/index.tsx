import React from 'react';
import {FormattedMessage} from 'react-intl';

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SortOptions: React.FC<Props> = ({value, onChange}) => {
  const options = [
    {value: 'popularity.desc', title: 'Popularity Descending'},
    {value: 'popularity.asc', title: 'Popularity Ascending'},
    {value: 'release_date.asc', title: 'Release date Ascending'},
    {value: 'release_date.desc', title: 'Release date Descending'},
    {value: 'original_title.asc', title: 'Title (A-Z)'},
    {value: 'original_title.desc', title: 'Title (Z-A)'},
    {value: 'vote_average.asc', title: 'Rating Ascending'},
    {value: 'vote_average.desc', title: 'Rating Descending'},
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value);

  return (
    <select value={value} onChange={handleChange}>
      {options.map(option => {
        const {value, title} = option;
        return (
          <FormattedMessage id={value} defaultMessage={title} key={value}>
            {message => <option value={value}>{message}</option>}
          </FormattedMessage>
        );
      })}
    </select>
  );
};

export default SortOptions;
