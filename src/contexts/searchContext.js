import { createContext, useContext, useState } from "react";

const searchContext = createContext(null);

export function useSearch() {
  return useContext(searchContext);
}

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};
