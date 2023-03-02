import React, { createContext, useState } from 'react';

interface AppContextInterface {
  isMerchant: boolean;
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextInterface>({
  isMerchant: false,
  setIsMerchant: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [isMerchant, setIsMerchant] = useState(false);

  return (
    <AppContext.Provider value={{ isMerchant, setIsMerchant }}>
      {children}
    </AppContext.Provider>
  );
};