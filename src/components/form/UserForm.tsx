import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const UserDetailsForm = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: 2,
          borderRadius: 1,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
        }}
      >
        <Grid item md={4}>
          <TextField
            label="First Name"
            variant="outlined"
            sx={{ width: "100%", marginBottom: 2 }}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Last Name"
            variant="outlined"
            sx={{ width: "100%", marginBottom: 2 }}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            sx={{ width: "100%", marginBottom: 2 }}
          />{" "}
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Phone Number"
            variant="outlined"
            type="tel"
            sx={{ width: "100%", marginBottom: 2 }}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            sx={{ width: "100%", marginBottom: 2 }}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            sx={{ width: "100%", marginBottom: 2 }}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Address"
            variant="outlined"
            multiline
            rows={3}
            sx={{ width: "100%", marginBottom: 2 }}
          />
        </Grid>
        <Grid item md={4}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetailsForm;
