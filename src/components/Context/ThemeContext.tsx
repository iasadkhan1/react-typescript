import React, { useState, createContext } from "react";

type ThemeProps = {
  children: React.ReactNode;
};
const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
