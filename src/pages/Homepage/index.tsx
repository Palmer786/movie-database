import React, {useEffect} from 'react';

const Homepage: React.FC = () => {
  useEffect(() => {
    window.location.href = '/popular';
  });

  return <div>{null}</div>;
};

export default Homepage;
