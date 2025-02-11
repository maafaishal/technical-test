"use client";

import { useRouter } from "next/navigation";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useAppSelector } from "@/store/store";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const authLoading = useAppSelector((state) => state.auth.initialLoading);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) router.push("/sign-in");
  }, [authLoading, isAuthenticated, router]);

  if (authLoading || !isAuthenticated) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return children;
};
