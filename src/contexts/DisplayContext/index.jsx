import React, {createContext, useState, useEffect} from 'react';

export const DisplayContext = createContext();

const DisplayProvider = props => {
  const [displayType, setDisplayType] = useState(
    JSON.parse(localStorage.getItem('displayType')) || 'grid',
  );

  useEffect(() => {
    localStorage.setItem('displayType', JSON.stringify(displayType));
  }, [displayType]);

  return (
    <DisplayContext.Provider value={[displayType, setDisplayType]}>
      {props.children}
    </DisplayContext.Provider>
  );
};
export default DisplayProvider;
