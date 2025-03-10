"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@/theme/ThemeContext";
import { makeStore } from "@/store/store";

import { AuthProvider } from "./auth";

import type { AppStore } from "@/store/store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};
