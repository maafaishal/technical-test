import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { GoogleIcon } from "@/components/customIcons/GoogleIcon";

import { Container, Card } from "./SignInPage.styles";
import { useSignInPage } from "./use-sign-in-page";

export function SignInPage() {
  const {
    processLoading,
    register,
    errors,
    handleSubmit,
    handleSignInWithPopup,
  } = useSignInPage();

  return (
    <Container direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Box>
          <Typography component="h1" variant="h5" gutterBottom>
            Login
          </Typography>
          <Typography variant="subtitle2" gutterBottom color="textDisabled">
            Enter your email and password below to log into your account
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={Boolean(errors.email)}
              helperText={errors.email?.message?.toString()}
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              {...register("email")}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              error={Boolean(errors.password)}
              helperText={errors.password?.message?.toString()}
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              {...register("password")}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            loading={processLoading}
            disabled={processLoading}
          >
            Sign in
          </Button>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleSignInWithPopup}
            startIcon={<GoogleIcon />}
            disabled={processLoading}
          >
            Sign in with Google
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
