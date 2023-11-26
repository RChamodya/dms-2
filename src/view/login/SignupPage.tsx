import React from "react";
import FormInputField from "../../components/input/FormInputField";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logimage from "../../assets/images/new2.jpg";
import { useNavigate } from "react-router-dom";
function Signup() {
  const commonError = "Field is required";
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required(commonError),
    password: Yup.string().required(commonError),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Passwords must match"
    ),
    email: Yup.string().required(commonError),
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickhowConfirmPassword = () =>
    setShowConfirmPassword((showC) => !showC);
  const navigate = useNavigate();
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
  });

  function onSubmit() {
    navigate("/mainlayout/dashboard");
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ECF0F1",
        }}
      >
        <Box sx={{ margin: "auto", width: "800px" }}>
          <Grid
            container
            spacing={3}
            sx={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Grid
              item
              md={6}
              lg={6}
              sx={{
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
              }}
            >
              <img
                src={logimage}
                className="login-image"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "30px",
                    textAlign: "center",
                    marginBottom: "30px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}> Sign up page</span>
                </Typography>
                <FormInputField
                  required={true}
                  id={"userName"}
                  label={"User Name"}
                  variant="outlined"
                  register={register("userName")}
                  error={!!errors.userName?.message}
                  size="small"
                  helperText={
                    errors?.password?.message
                      ? errors?.userName?.message?.toString()
                      : ""
                  }
                  disabled={false}
                />
                <FormInputField
                  required={true}
                  id={"email"}
                  label={"Email"}
                  variant="outlined"
                  type="email"
                  size="small"
                  register={register("email")}
                  error={!!errors.email?.message}
                  helperText={
                    errors?.email?.message
                      ? errors?.email?.message?.toString()
                      : ""
                  }
                  disabled={false}
                />
                <FormInputField
                  required={true}
                  id={"password"}
                  size="small"
                  label={"Password"}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  register={register("password")}
                  error={!!errors.userName?.message}
                  helperText={
                    errors?.password?.message
                      ? errors?.userName?.message?.toString()
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffRoundedIcon />
                          ) : (
                            <VisibilityRoundedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  disabled={false}
                />
                <FormInputField
                  required={true}
                  size="small"
                  id={"confirmPassword"}
                  label={"Confirm Password"}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  register={register("confirmPassword")}
                  error={!!errors.confirmPassword?.message}
                  helperText={
                    errors?.confirmPassword?.message
                      ? errors?.confirmPassword?.message?.toString()
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffRoundedIcon />
                          ) : (
                            <VisibilityRoundedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  disabled={false}
                />
                <Button
                  type={"submit"}
                  variant="contained"
                  className="login-btn"
                  sx={{ mt: 1 }}
                  onClick={handleSubmit(onSubmit)}
                >
                  SIgn Up
                </Button>
                <a href="/" style={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "gray" }}>
                    Already have an account?{" "}
                    <span style={{ fontWeight: "bold" }}>Login here</span>
                  </Typography>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
    // <>
    //   <div
    //     style={{
    //       width: "100%",
    //       minHeight: "100vh",
    //       display: "flex",
    //       alignItems: "center",
    //       backgroundColor: "#ECF0F1",
    //       padding: "16px", // Added padding for better spacing
    //     }}
    //   >
    //     <Box sx={{ margin: "auto", width: "100%", maxWidth: "800px" }}>
    //       <Grid
    //         container
    //         spacing={3}
    //         sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
    //       >
    //         <Grid
    //           item
    //           md={6}
    //           lg={6}
    //           sx={{
    //             paddingLeft: "0px !important",
    //             paddingTop: "0px !important",
    //           }}
    //         >
    //           <img
    //             src={logimage}
    //             alt="Login Image"
    //             style={{
    //               width: "100%",
    //               height: "100%",
    //               borderTopLeftRadius: "8px",
    //               borderBottomLeftRadius: "8px",
    //             }}
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           md={6}
    //           lg={6}
    //           sx={{
    //             display: "flex",
    //             flexDirection: "column",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             backgroundColor: "#fff",
    //             padding: "16px",
    //             borderTopRightRadius: "8px",
    //             borderBottomRightRadius: "8px",
    //           }}
    //         >
    //           <FormInputField
    //             required={true}
    //             id={"userName"}
    //             label={"User Name"}
    //             variant="outlined"
    //             register={register("userName")}
    //             error={!!errors.userName?.message}
    //             helperText={
    //               errors?.password?.message
    //                 ? errors?.userName?.message?.toString()
    //                 : ""
    //             }
    //             disabled={false}
    //             sx={{ width: "100%" }}
    //           />
    //           <FormInputField
    //             required={true}
    //             id={"email"}
    //             label={"Email"}
    //             variant="outlined"
    //             type="email"
    //             register={register("email")}
    //             error={!!errors.email?.message}
    //             helperText={
    //               errors?.email?.message
    //                 ? errors?.email?.message?.toString()
    //                 : ""
    //             }
    //             disabled={false}
    //             sx={{ width: "100%" }}
    //           />
    //           <FormInputField
    //             required={true}
    //             id={"password"}
    //             label={"Password"}
    //             variant="outlined"
    //             type={showPassword ? "text" : "password"}
    //             register={register("password")}
    //             error={!!errors.userName?.message}
    //             helperText={
    //               errors?.password?.message
    //                 ? errors?.userName?.message?.toString()
    //                 : ""
    //             }
    //             InputProps={{
    //               endAdornment: (
    //                 <InputAdornment position="end">
    //                   <IconButton
    //                     aria-label="toggle password visibility"
    //                     onClick={handleClickShowPassword}
    //                     edge="end"
    //                   >
    //                     {showPassword ? (
    //                       <VisibilityOffRoundedIcon />
    //                     ) : (
    //                       <VisibilityRoundedIcon />
    //                     )}
    //                   </IconButton>
    //                 </InputAdornment>
    //               ),
    //             }}
    //             disabled={false}
    //             sx={{ width: "100%" }}
    //           />
    //           <FormInputField
    //             required={true}
    //             id={"confirmPassword"}
    //             label={"Confirm Password"}
    //             variant="outlined"
    //             type={showPassword ? "text" : "password"}
    //             register={register("confirmPassword")}
    //             error={!!errors.confirmPassword?.message}
    //             helperText={
    //               errors?.confirmPassword?.message
    //                 ? errors?.confirmPassword?.message?.toString()
    //                 : ""
    //             }
    //             InputProps={{
    //               endAdornment: (
    //                 <InputAdornment position="end">
    //                   <IconButton
    //                     aria-label="toggle password visibility"
    //                     onClick={handleClickShowPassword}
    //                     edge="end"
    //                   >
    //                     {showPassword ? (
    //                       <VisibilityOffRoundedIcon />
    //                     ) : (
    //                       <VisibilityRoundedIcon />
    //                     )}
    //                   </IconButton>
    //                 </InputAdornment>
    //               ),
    //             }}
    //             disabled={false}
    //             sx={{ width: "100%" }}
    //           />
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             className="login-btn"
    //             sx={{ mt: 2, width: "100%" }}
    //             onClick={onSubmit}
    //           >
    //             Sign Up
    //           </Button>
    //           <a href="/" style={{ textDecoration: "none", marginTop: "8px" }}>
    //             <Typography sx={{ color: "gray" }}>
    //               Already have an account?{" "}
    //               <span style={{ fontWeight: "bold" }}>Login here</span>
    //             </Typography>
    //           </a>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </div>
    // </>
  );
}

export default Signup;
