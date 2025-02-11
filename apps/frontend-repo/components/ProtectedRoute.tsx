"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { PageLoader } from "./ui/PageLoader";

import { useAppSelector } from "@/store/store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const authLoading = useAppSelector((state) => state.auth.initialLoading);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) router.push("/sign-in");
  }, [authLoading, isAuthenticated, router]);

  if (authLoading || !isAuthenticated) {
    return <PageLoader />;
  }

  return children;
};
