import React from 'react';
import DisplayTypeGrid from './DisplayTypeGrid';
import DisplayTypeFlex from './DisplayTypeFlex';

const Header = ({movie, observer, displayType}) => {
  const {title} = movie;

  const getTitle = title => {
    if (title.length > 30 && displayType === 'grid')
      return `${title.slice(0, 30)}...`;
    return title;
  };

  const newTitle = getTitle(title);

  if (displayType === 'grid')
    return (
      <DisplayTypeGrid movie={movie} observer={observer} newTitle={newTitle} />
    );

  if (displayType === 'flex')
    return (
      <DisplayTypeFlex movie={movie} observer={observer} newTitle={newTitle} />
    );
};

export default Header;
