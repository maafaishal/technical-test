import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  margin: "auto",

  [theme.breakpoints.up("sm")]: {
    width: "480px",
  },
}));

export const Container = styled(Stack)(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.spacing(4)})`,
  padding: theme.spacing(2),
}));
