"use client";

import { useState, useRef, useEffect } from "react";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { useAppSelector } from "@/store/store";

export const ErrorSnackbar = () => {
  const [open, setOpen] = useState(false);

  const authError = useAppSelector((state) => state.auth.error);
  const userError = useAppSelector((state) => state.user.error);

  const errorMessage = authError || userError;

  const prevMessage = useRef<string | null>(null);

  useEffect(() => {
    if (prevMessage.current !== errorMessage) {
      setOpen(true);
      prevMessage.current = errorMessage;
    }
  }, [errorMessage]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    errorMessage && (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    )
  );
};
