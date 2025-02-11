"use client";

import { createTheme } from "@mui/material/styles";

/* ==================== Types ==================== */

export type Themes = keyof typeof themes;

/* ==================== Implementation ==================== */

const lightTheme = {
  palette: {
    mode: "light" as const,
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
};

const darkTheme = {
  palette: {
    mode: "dark" as const,
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#424242",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
};

const retroTheme = {
  palette: {
    primary: {
      main: "#282425",
    },
    secondary: {
      main: "#e4d8b4",
    },
    background: {
      default: "#ece3ca",
      paper: "#e4d8b4",
    },
    text: {
      primary: "#282425",
      secondary: "#282425",
    },
  },
};

export const themes = {
  system: {},
  light: createTheme(lightTheme),
  dark: createTheme(darkTheme),
  retro: createTheme(retroTheme),
};

export const themeKeys = Object.keys(themes) as Themes[];
