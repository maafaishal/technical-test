"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

import {
  ThemeProvider as MUIThemeProvider,
  useMediaQuery,
} from "@mui/material";

import { themes, themeKeys, Themes } from "./themes";

/* ==================== Types ==================== */

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextValue = {
  currentTheme: Themes;
  changeTheme: (theme: Themes) => void;
};

/* ==================== Implementation ==================== */

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [lsValue, setLSValue] = useLocalStorage<Themes>("app-theme", "system");

  const [currentTheme, setCurrentTheme] = useState<Themes>(themeKeys[0]);

  const prefersColorScheme = useMediaQuery("(prefers-color-scheme: dark)");

  const changeTheme = (theme: Themes) => {
    setCurrentTheme(theme);
    setLSValue(theme);
  };

  useEffect(() => {
    if (lsValue) {
      setCurrentTheme(lsValue);
    }
  }, [lsValue]);

  const theme =
    currentTheme === "system"
      ? prefersColorScheme
        ? "dark"
        : "light"
      : currentTheme;

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <MUIThemeProvider theme={themes[theme]}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error(`"useTheme" must be used within "ThemeProvider"`);
  }

  return context;
};
