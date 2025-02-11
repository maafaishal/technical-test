"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useAppSelector } from "@/store/store";

import { SignInPage } from "../components/SignInPage";

export default function SignIn() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const authLoading = useAppSelector((state) => state.auth.initialLoading);

  useEffect(() => {
    if (!authLoading && isAuthenticated) router.push("/");
  }, [authLoading, isAuthenticated, router]);

  if (authLoading || isAuthenticated) {
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

  return <SignInPage />;
}
