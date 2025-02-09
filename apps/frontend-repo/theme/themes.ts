"use client";

import { createTheme } from "@mui/material/styles";

/* ==================== Types ==================== */

export type Themes = keyof typeof themes;

/* ==================== Implementation ==================== */

const systemTheme = {
  colorSchemes: {
    dark: false,
  },
};

const lightTheme = {
  colorSchemes: {
    dark: false,
  },
};

const darkTheme = {
  colorSchemes: {
    dark: true,
  },
};

const retroTheme = {
  colorSchemes: {
    dark: true,
  },
};

export const themes = {
  system: createTheme(systemTheme),
  light: createTheme(lightTheme),
  dark: createTheme(darkTheme),
  retro: createTheme(retroTheme),
};

export const themeKeys = Object.keys(themes) as Themes[];
