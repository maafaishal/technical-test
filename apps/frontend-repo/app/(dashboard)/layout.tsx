import Stack from "@mui/material/Stack";

import { ProtectedRoute } from "@/components/ProtectedRoute";

import { Header } from "./components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <Stack>
        <Header />
        {children}
      </Stack>
    </ProtectedRoute>
  );
}
