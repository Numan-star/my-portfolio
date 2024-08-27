// app/context/SomeContext.js
import { createContext, useContext } from 'react';

const SomeContext = createContext();

export function SomeProvider({ children }) {
  const contextValue = {}; // Add your context value here
  return (
    <SomeContext.Provider value={contextValue}>
      {children}
    </SomeContext.Provider>
  );
}

export function useSomeContext() {
  return useContext(SomeContext);
}
