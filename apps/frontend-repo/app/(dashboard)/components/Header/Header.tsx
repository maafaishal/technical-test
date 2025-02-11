import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  return (
    <AppBar position="static" color="inherit" sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <ThemeSwitcher />
        <LogoutButton />
      </Box>
    </AppBar>
  );
};
