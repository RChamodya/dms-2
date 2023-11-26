import {
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function Settings() {
  const [age, setAge] = React.useState("");

  const commonError = "Field is required";
  const validationSchema = Yup.object().shape({
    // loanId: Yup.string().required(commonError),
    // company: Yup.string().required(commonError),
    // Phone: Yup.string().required(commonError),
    lastName: Yup.string().required(commonError),
    firstName: Yup.string().required(commonError),
    mobileNumber: Yup.string().required(commonError),
    officemobileNumber: Yup.string().required(commonError),
    address: Yup.string().required(commonError),
    officeaddress: Yup.string().required(commonError),
    // confirmPassword: Yup.string().oneOf(
    //   [Yup.ref("password"), ""],
    //   "Passwords must match"
    // ),
    // password: Yup.string().required(commonError),
    email: Yup.string().required(commonError),
    officeemail: Yup.string().required(commonError),
  });
  const [defaultValues, setDefaultValues] = useState<any>({
    // company: "google",
    // Phone: "011234567",
    lastName: "Kumara",
    firstName: "Saman",
    // confirmPassword: "123456",
    // password: "123456",
    mobileNumber: "01123456",
    officemobileNumber: "01123456",
    address: "Colombo",
    officeaddress: "Colombo",
    email: "samankumara@gmail.com",
    officeemail: "samankumara@gmail.com",
  });
  const Clicked = () => {
    notifySuccessful();
  };
  const notifySuccessful = () => {
    toast.success("Updated Successfully");
  };
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Grid container sx={{}}>
        <Card sx={{ maxWidth: "1000px", margin: "auto", marginTop: 4 }}>
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "gray",
                marginBottom: "10px",
              }}
            >
              Personal Details
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                  <TextField
                    name="firstName"
                    id="firstName"
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    type="number"
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Office Email"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    label="Office Address"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Office Phone Number"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Personal Email"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    fullWidth
                    label="Age"
                    type="number"
                    variant="outlined"
                    required
                    size="small"
                  />
                </Grid>

                {/* Add more fields as needed */}
                <Grid item xs={4}></Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", justifyContent: "end", gap: "25px" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    onClick={handleSubmit(Clicked)}
                  >
                    Submit
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    type="button"
                    onClick={() => reset()}
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Settings;
