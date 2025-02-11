import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import InputAdornment from "@mui/material/InputAdornment";

import type {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";

type Props = {
  variant?: TextFieldVariants;
} & Omit<TextFieldProps, "variant">;

export const PasswordInput = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <TextField
        type={showPassword ? "text" : "password"}
        {...props}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};
