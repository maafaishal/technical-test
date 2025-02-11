"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useMainPage } from "./use-main-page";

export function MainPage() {
  const {
    isEdit,
    setEdit,
    register,
    userData,
    userLoading,
    errors,
    recentlyActive,
    handleClickFetch,
    handleSubmit,
    handleChangeDate,
  } = useMainPage();

  const recentlyActiveRegister = register("recentlyActive");

  return (
    <Container sx={{ paddingY: 2 }}>
      <Stack gap={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="h1" variant="h5" gutterBottom>
            Welcome back!
          </Typography>
        </Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: 2,
                  marginBottom: 2,
                }}
              >
                <Typography component="h1" variant="h6" gutterBottom>
                  User Information
                </Typography>
                {userData &&
                  (isEdit ? (
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        sx={{ flexGrow: { xs: 1, sm: 0 } }}
                        type="submit"
                        variant="contained"
                      >
                        Save
                      </Button>
                      <Button
                        sx={{ flexGrow: { xs: 1, sm: 0 } }}
                        variant="outlined"
                        onClick={() => setEdit(false)}
                      >
                        Cancel
                      </Button>
                    </Box>
                  ) : (
                    <Button onClick={() => setEdit(true)}>Edit</Button>
                  ))}
              </Box>

              {!userData ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    loading={userLoading}
                    disabled={userLoading}
                    onClick={handleClickFetch}
                  >
                    Fetch data
                  </Button>
                </Box>
              ) : (
                <Grid container spacing={2} columns={{ xs: 1, sm: 2, lg: 4 }}>
                  <Grid size={1}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel>ID</FormLabel>
                      <TextField
                        error={Boolean(errors.userId)}
                        helperText={errors.userId?.message?.toString()}
                        type="text"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        disabled={!isEdit}
                        {...register("userId")}
                      />
                    </FormControl>
                  </Grid>
                  <Grid size={1}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel>Average Weighted Ratings</FormLabel>
                      <TextField
                        error={Boolean(errors.totalAverageWeightRatings)}
                        helperText={errors.userId?.message?.toString()}
                        type="number"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        disabled={!isEdit}
                        {...register("totalAverageWeightRatings")}
                      />
                    </FormControl>
                  </Grid>
                  <Grid size={1}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel>Number of Rents</FormLabel>
                      <TextField
                        error={Boolean(errors.numberOfRents)}
                        helperText={errors.numberOfRents?.message?.toString()}
                        type="number"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        disabled={!isEdit}
                        {...register("numberOfRents")}
                      />
                    </FormControl>
                  </Grid>
                  <Grid size={1}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel>Recent Activity</FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          {...recentlyActiveRegister}
                          onChange={handleChangeDate}
                          disabled={!isEdit}
                          value={recentlyActive}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
