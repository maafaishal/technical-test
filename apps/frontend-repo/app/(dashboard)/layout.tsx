import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack>
      <AppBar position="static" color="inherit" sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <ThemeSwitcher />
          <Button sx={{ display: "flex", alignItems: "center" }}>
            Log out <ArrowForwardIcon sx={{ height: 20, width: 20, ml: 0.5 }} />
          </Button>
        </Box>
      </AppBar>
      {children}
    </Stack>
  );
}
