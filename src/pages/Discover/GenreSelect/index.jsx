import React from 'react';
import {FormattedMessage} from 'react-intl';

const GenreSelect = ({genres, setSelectedGenre, selectedGenre}) => {
  const handleChange = e => setSelectedGenre(e.target.value);

  return (
    <select value={selectedGenre} onChange={handleChange}>
      <FormattedMessage id="discover.genre" defaultMessage="Select genre">
        {message => <option value="">{message}</option>}
      </FormattedMessage>
      {genres.map(genre => {
        const {id, name} = genre;
        return (
          <option value={id} key={id}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default GenreSelect;
