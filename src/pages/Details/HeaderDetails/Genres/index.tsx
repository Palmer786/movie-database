import React from 'react';

interface Props {
  genres?: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

const Genres: React.FC<Props> = ({genres}) => {
  return (
    <ul>
      {genres?.map(genre => {
        const {id, name} = genre;
        return <li key={id}> {name} </li>;
      })}
    </ul>
  );
};

export default Genres;
