import { useContext, useState } from "react";
import { createContext } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [homeContextValue, setContextHomeValue] = useState('');
  return (
    <HomeContext.Provider value={{ homeContextValue, setContextHomeValue }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
}