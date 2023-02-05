import { createContext } from "react";

export type Theme = "dark" | "light";

type ThemeContextProps = {
  theme: Theme;
  setTheme: (value: Theme) => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);
