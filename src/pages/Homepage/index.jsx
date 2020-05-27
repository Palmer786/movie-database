import React, {useEffect} from 'react';

const Homepage = () => {
  useEffect(() => (window.location = '/popular'));
  return <div>{null}</div>;
};
export default Homepage;
