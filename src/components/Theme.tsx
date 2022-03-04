import React, { useContext } from "react";
import { ThemeContextProvider } from "./Context/ThemeContext";

function Theme() {
  const { theme, setTheme } = useContext(ThemeContextProvider);
  return <div>Theme</div>;
}

export default Theme;
