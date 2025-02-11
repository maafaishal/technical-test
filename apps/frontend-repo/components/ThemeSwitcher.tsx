"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/material";

import { useTheme } from "@/theme/ThemeContext";

import { themeKeys } from "@/theme/themes";

import type { Themes } from "@/theme/themes";

const BOX_OPTION_COLORS: Record<Themes, string> = {
  system: "#ffffff",
  light: "#ffffff",
  dark: "#121212",
  retro: "#ece3ca",
};

export function ThemeSwitcher() {
  const { currentTheme, changeTheme } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleDisplay = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleDisplay}
      >
        Theme <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            padding: 1.5,
            backgroundColor: (theme) => theme.palette.grey[200],
          },
        }}
      >
        <Stack gap={1.5}>
          {themeKeys.map((themeKey) => (
            <MenuItem
              key={themeKey}
              sx={{
                backgroundColor: BOX_OPTION_COLORS[themeKey],
                color: (theme) =>
                  themeKey === "dark"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[900],
                "&:hover": {
                  backgroundColor: BOX_OPTION_COLORS[themeKey],
                },
                width: "140px",
                borderRadius: 1,
                padding: 1,
              }}
              onClick={() => changeTheme(themeKey)}
            >
              <ListItemIcon>
                {currentTheme === themeKey && (
                  <CheckIcon
                    fontSize="small"
                    sx={{
                      color: (theme) =>
                        themeKey === "dark"
                          ? theme.palette.grey[400]
                          : theme.palette.grey[900],
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText>{themeKey}</ListItemText>
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
}
