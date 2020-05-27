import React from 'react';

const Genres = ({genres}) => {
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
