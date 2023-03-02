import React, { createContext, useState } from 'react';

interface AppContextInterface {
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextInterface>({
  isSeller: false,
  setIsSeller: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [isSeller, setIsSeller] = useState(true);

  return (
    <AppContext.Provider value={{ isSeller, setIsSeller }}>
      {children}
    </AppContext.Provider>
  );
};