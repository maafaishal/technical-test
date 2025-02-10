import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";

import { FetchButton } from "../FetchButton";

import { useMainPage } from "./use-main-page";

export function MainPage() {
  const { isEdit, setEdit } = useMainPage();

  return (
    <Container sx={{ paddingY: 2 }}>
      <Stack gap={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="h1" variant="h5" gutterBottom>
            Welcome, a@a.com!
          </Typography>
          <FetchButton />
        </Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography component="h1" variant="h6" gutterBottom>
                User Information
              </Typography>
              {isEdit ? (
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button variant="contained">Submit</Button>
                  <Button variant="outlined" onClick={() => setEdit(false)}>
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button onClick={() => setEdit(true)}>Edit</Button>
              )}
            </Box>

            <Grid container spacing={2} sx={{ marginTop: 3 }}>
              <Grid size={4}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="email" sx={{ marginBottom: 0.5 }}>
                    Email
                  </FormLabel>
                  {isEdit ? (
                    <TextField
                      // error={Boolean(errors.email)}
                      // helperText={errors.email?.message?.toString()}
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      // {...register("email")}
                    />
                  ) : (
                    <Typography variant="body1" gutterBottom>
                      test@gmail.com
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid size={4}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="email" sx={{ marginBottom: 0.5 }}>
                    First Name
                  </FormLabel>
                  {isEdit ? (
                    <TextField
                      // error={Boolean(errors.email)}
                      // helperText={errors.email?.message?.toString()}
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      // {...register("email")}
                    />
                  ) : (
                    <Typography variant="body1" gutterBottom>
                      test@gmail.com
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid size={4}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="email" sx={{ marginBottom: 0.5 }}>
                    Last Name
                  </FormLabel>
                  {isEdit ? (
                    <TextField
                      // error={Boolean(errors.email)}
                      // helperText={errors.email?.message?.toString()}
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      // {...register("email")}
                    />
                  ) : (
                    <Typography variant="body1" gutterBottom>
                      test@gmail.com
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
