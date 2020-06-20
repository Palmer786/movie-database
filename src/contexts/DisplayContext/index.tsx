import React, {createContext, useState, useEffect} from 'react';

interface Props {
  children: React.ReactNode;
}

type Context = [string, React.Dispatch<React.SetStateAction<string>>];

export const DisplayContext = createContext<Context>(null!);

const DisplayProvider: React.FC<Props> = ({children}) => {
  const localDisplayType: string =
    JSON.parse(localStorage.getItem('displayType') as string) || 'grid';
  const [displayType, setDisplayType] = useState(localDisplayType);

  useEffect(() => {
    localStorage.setItem('displayType', JSON.stringify(displayType));
  }, [displayType]);

  return (
    <DisplayContext.Provider value={[displayType, setDisplayType]}>
      {children}
    </DisplayContext.Provider>
  );
};
export default DisplayProvider;
