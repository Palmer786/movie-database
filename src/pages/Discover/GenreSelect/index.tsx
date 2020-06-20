import React from 'react';
import {FormattedMessage} from 'react-intl';

interface Props {
  genres: Genre[];
  setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
  selectedGenre: string;
}

interface Genre {
  id: number;
  name: string;
}

const GenreSelect: React.FC<Props> = ({
  genres,
  setSelectedGenre,
  selectedGenre,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedGenre(e.target.value);

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
