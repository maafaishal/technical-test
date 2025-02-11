"use client";

import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useAppDispatch } from "@/store/store";

import { signOut } from "@/store/actions";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <Button
      sx={{ display: "flex", alignItems: "center" }}
      onClick={handleClick}
    >
      Log out <ArrowForwardIcon sx={{ height: 20, width: 20, ml: 0.5 }} />
    </Button>
  );
};
