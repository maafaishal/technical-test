"use client";

import { createTheme } from "@mui/material/styles";

/* ==================== Types ==================== */

export type Themes = keyof typeof themes;

/* ==================== Implementation ==================== */

export const systemTheme = {
  colorSchemes: {
    dark: false,
  },
};

export const lightTheme = {
  colorSchemes: {
    dark: false,
  },
};

export const darkTheme = {
  colorSchemes: {
    dark: true,
  },
};

export const retroTheme = {
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
