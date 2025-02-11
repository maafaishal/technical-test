import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { ProtectedRoute } from "@/components/ProtectedRoute";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import { LogoutButton } from "./components/LogoutButton";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <Stack>
        <AppBar position="static" color="inherit" sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <ThemeSwitcher />
            <LogoutButton />
          </Box>
        </AppBar>
        {children}
      </Stack>
    </ProtectedRoute>
  );
}
