import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar, Box, Grid, Grow, Typography } from "@mui/material";
import propic from "../../assets/images/pic1.jpg";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { DigitalClock } from "../../components/clock/DigitalClock";

// Form data structure
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  age: string;
  position: string;
  company: string;
  companyemail: string;
}

const UserProfileCard: React.FC = () => {
  const userData = {
    name: "John Doe",
    profilePicture: "url_to_your_profile_picture",
  };
  const notifySuccessful = () => {
    toast.success("Updated Successfully");
  };
  return (
    <Box sx={{ marginBottom: "30px" }}>
      {" "}
      <Card sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              item
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={userData.name}
                src={propic}
                style={{ width: "50px", height: "50px" }}
              />
              <Box sx={{ marginLeft: "12px" }}>
                <Typography sx={{ fontWeight: "bold", color: "#666666" }}>
                  John Wick
                </Typography>
                <Typography sx={{ color: "#666666", fontSize: "12px" }}>
                  Software Engineer
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              {/* <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                User Details
              </Typography> */}
            </Grid>
            <Grid item>
              {/* <Typography variant="h6">{userData.name}</Typography> */}
              <DigitalClock />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

const UserForm: React.FC = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    address: yup.string().required("Address is required"),
    position: yup.string().required("Position is required"),
    company: yup.string().required("Company is required"),
    phone: yup.string().required("Phone number is required"),
    age: yup.string().required("Age is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    companyemail: yup
      .string()
      .email("Invalid email")
      .required(" Company Email is required"),
  });

  const [defaultValues, setDefaultValues] = useState<any>({
    firstName: "John",
    lastName: "Wick",
    email: "john.doe@gmail.com",
    address: "123 Main St",
    phone: "0112345678",
    age: "25",
    position: "Software Engineer",
    company: "Microsoft",
    companyemail: "microsoft@gmail.com",
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle your form submission logic here
    console.log(data);
  };
  const handleClear = () => {
    reset();
  };
  // Initialize react-hook-form
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    // defaultValues: defaultValues,
    defaultValues: defaultValues,
  });
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    const animation = setTimeout(() => {
      setChecked(true);
    }, 0);
    return () => clearTimeout(animation);
  }, []);
  //   useEffect(() => {
  //     setDefaultValues(defaultValues);
  //   }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "30px", paddingRight: "18px" }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Box>
            <UserProfileCard />
          </Box>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1500 } : {})}
        >
          <Card
            sx={{
              borderTop: "10px solid #026C45",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                  sx={{
                    paddingBottom: "10px",
                    fontWeight: "bold",
                    color: "#808080",
                  }}
                >
                  User Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          error={!!errors.firstName}
                          helperText={errors.firstName?.message}
                          size="small"
                          inputProps={{ ...register("firstName") }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          error={!!errors.lastName}
                          helperText={errors.lastName?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          variant="outlined"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="address"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Address"
                          variant="outlined"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.address?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Phone Number"
                          variant="outlined"
                          fullWidth
                          type="number"
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="age"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Age"
                          variant="outlined"
                          fullWidth
                          type="number"
                          error={!!errors.age}
                          helperText={errors.age?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="position"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Occupation"
                          variant="outlined"
                          fullWidth
                          type="text"
                          error={!!errors.position}
                          helperText={errors.position?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="company"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Company"
                          variant="outlined"
                          fullWidth
                          type="text"
                          error={!!errors.company}
                          helperText={errors.company?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      name="companyemail"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Company Email"
                          variant="outlined"
                          fullWidth
                          type="text"
                          error={!!errors.companyemail}
                          helperText={errors.companyemail?.message}
                          size="small"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>

                    <Button
                      type="button"
                      variant="outlined"
                      color="secondary"
                      onClick={handleClear}
                      sx={{ marginLeft: "25px" }}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grow>
      </Grid>
    </Grid>
  );
};
export default UserForm;
