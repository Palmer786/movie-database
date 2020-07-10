import React, {createContext, useState, useEffect} from 'react';

interface Context {
  phone: boolean;
  laptop: boolean;
}

export const ResolutionContext = createContext<Context>(null!);

interface Props {
  children: React.ReactNode;
}

const ResolutionProvider: React.FC<Props> = ({children}) => {
  const [phone, togglePhone] = useState(
    window.matchMedia('(max-width:786px)').matches,
  );
  const [laptop, toggleLaptop] = useState(
    window.matchMedia('(max-width:1024px)').matches,
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      togglePhone(window.matchMedia('(max-width:786px)').matches);
      toggleLaptop(window.matchMedia('(max-width:1024px)').matches);
    });
  }, []);

  return (
    <ResolutionContext.Provider value={{phone, laptop}}>
      {children}
    </ResolutionContext.Provider>
  );
};

export default ResolutionProvider;
