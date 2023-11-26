// import React from "react";
// import FormInputField from "../../components/input/FormInputField";
// import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
// import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Simulate } from "react-dom/test-utils";
// import error = Simulate.error;
// import { useForm } from "react-hook-form";
// import { object, string } from "yup";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import logimage from "../../assets/images/man.jpg";
// import { useNavigate } from "react-router-dom";
// function Login() {
//   const commonError = "Field is required";
//   const validationSchema = Yup.object().shape({
//     userName: Yup.string().required(commonError),
//     password: Yup.string().required(commonError),
//   });
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     getValues,
//     setValue,
//     control,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   function onSubmit() {
//     navigate("/mainlayout/dashboard");
//   }

//   return (
//     // <>
//     //   <div
//     //     style={{
//     //       width: "100vw",
//     //       height: "100vh",
//     //       display: "flex",
//     //       alignItems: "center",
//     //       backgroundColor: "#ECF0F1",
//     //     }}
//     //   >
//     //     <Box sx={{ margin: "auto", width: "800px" }}>
//     //       <Grid container spacing={3}>
//     //         <Grid
//     //           item
//     //           md={6}
//     //           lg={6}
//     //           sx={{
//     //             paddingLeft: "0px !important",
//     //             paddingTop: "0px !important",
//     //           }}
//     //         >
//     //           <img
//     //             src={logimage}
//     //             className="login-image"
//     //             style={{ width: "100%", height: "450px" }}
//     //           />
//     //         </Grid>
//     //         <Grid
//     //           item
//     //           md={6}
//     //           lg={6}
//     //           sx={{
//     //             display: "flex",
//     //             justifyContent: "center",
//     //             alignItems: "center",
//     //             backgroundColor: "#fff",
//     //             marginBottom: "4px",
//     //           }}
//     //         >
//     //           <Box
//     //             sx={{
//     //               display: "flex",
//     //               flexDirection: "column",
//     //               gap: 2,
//     //             }}
//     //           >
//     // <FormInputField
//     //   required={true}
//     //   id={"userName"}
//     //   label={"User Name"}
//     //   variant="outlined"
//     //   register={register("userName")}
//     //   error={!!errors.userName?.message}
//     //   helperText={
//     //     errors?.password?.message
//     //       ? errors?.userName?.message?.toString()
//     //       : ""
//     //   }
//     //   disabled={false}
//     // />
//     // <FormInputField
//     //   required={true}
//     //   id={"password"}
//     //   label={"Password"}
//     //   variant="outlined"
//     //   type={showPassword ? "text" : "password"}
//     //   register={register("password")}
//     //   error={!!errors.userName?.message}
//     //   helperText={
//     //     errors?.password?.message
//     //       ? errors?.userName?.message?.toString()
//     //       : ""
//     //   }
//     //   InputProps={{
//     //     endAdornment: (
//     //       <InputAdornment position="end">
//     //         <IconButton
//     //           aria-label="toggle password visibility"
//     //           onClick={handleClickShowPassword}
//     //           edge="end"
//     //         >
//     //           {showPassword ? (
//     //             <VisibilityOffRoundedIcon />
//     //           ) : (
//     //             <VisibilityRoundedIcon />
//     //           )}
//     //         </IconButton>
//     //       </InputAdornment>
//     //     ),
//     //   }}
//     //   disabled={false}
//     // />
//     // <Button
//     //   type={"submit"}
//     //   variant="contained"
//     //   className="login-btn"
//     //   sx={{ mt: 1 }}
//     //   onClick={handleSubmit(onSubmit)}
//     // >
//     //   Log In
//     // </Button>
//     // <a href="/signup" style={{ textDecoration: "none" }}>
//     //   <Typography sx={{ color: "gray" }}>
//     //     Don't have an acccout?{" "}
//     //     <span style={{ fontWeight: "bold" }}>Signup here</span>
//     //   </Typography>
//     // </a>
//     //           </Box>
//     //         </Grid>
//     //       </Grid>
//     //     </Box>
//     //   </div>
//     // </>
//     <>
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           backgroundColor: "#ECF0F1",
//         }}
//       >
//         <Box sx={{ margin: "auto", width: "80%" }}>
//           <Grid container spacing={3}>
//             <Grid item md={6} sx={{ padding: "0px !important" }}>
//               <img
//                 src={logimage}
//                 className="login-image"
//                 style={{ width: "100%", height: "auto", maxWidth: "100%" }}
//                 alt="Login Image"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#fff",
//                 marginBottom: "4px",
//                 padding: "20px",
//                 // borderRadius: "8px",

//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                 <FormInputField
//                   required={true}
//                   id={"userName"}
//                   label={"User Name"}
//                   variant="outlined"
//                   register={register("userName")}
//                   error={!!errors.userName?.message}
//                   helperText={
//                     errors?.password?.message
//                       ? errors?.userName?.message?.toString()
//                       : ""
//                   }
//                   disabled={false}
//                 />
//                 <FormInputField
//                   required={true}
//                   id={"password"}
//                   label={"Password"}
//                   variant="outlined"
//                   type={showPassword ? "text" : "password"}
//                   register={register("password")}
//                   error={!!errors.userName?.message}
//                   helperText={
//                     errors?.password?.message
//                       ? errors?.userName?.message?.toString()
//                       : ""
//                   }
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           edge="end"
//                         >
//                           {showPassword ? (
//                             <VisibilityOffRoundedIcon />
//                           ) : (
//                             <VisibilityRoundedIcon />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   disabled={false}
//                 />
//                 <Button
//                   type={"submit"}
//                   variant="contained"
//                   className="login-btn"
//                   sx={{ mt: 1 }}
//                   onClick={handleSubmit(onSubmit)}
//                 >
//                   Log In
//                 </Button>
//                 <a href="/signup" style={{ textDecoration: "none" }}>
//                   <Typography sx={{ color: "gray" }}>
//                     Don't have an acccout?{" "}
//                     <span style={{ fontWeight: "bold" }}>Signup here</span>
//                   </Typography>
//                 </a>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//     </>
//   );
// }

// export default Login;
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import FormInputField from "../../components/input/FormInputField";
import logimage from "../../assets/images/new2.jpg";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface FormData {
  userName: string;
  password: string;
}

function Login() {
  const commonError = "Field is required";
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required(commonError),
    password: Yup.string().required(commonError),
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    navigate("/mainlayout/dashboard");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ECF0F1",
      }}
    >
      <Box sx={{ margin: "auto", width: "80%" }}>
        <Grid container spacing={3}>
          <Grid item md={6} sx={{ padding: "0px !important" }}>
            <img
              src={logimage}
              className="login-image"
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
              alt="Login Image"
            />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              marginBottom: "4px",
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <LoginForm
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              errors={errors}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

interface LoginFormProps {
  onSubmit: () => void;
  register: any;
  errors: any;
  showPassword: boolean;
  handleClickShowPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  register,
  errors,
  showPassword,
  handleClickShowPassword,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Typography
      sx={{
        color: "gray",
        fontSize: "45px",
        textAlign: "center",
        marginBottom: "30px",
        marginTop: "30px",
      }}
    >
      <span style={{ fontWeight: "bold" }}> Welcome Back</span>
    </Typography>
    <FormInputField
      required={true}
      id="userName"
      label="User Name"
      variant="outlined"
      register={register("userName")}
      error={!!errors.userName?.message}
      helperText={errors?.userName?.message?.toString() || ""}
      disabled={false}
      size="small"
    />
    <FormInputField
      required={true}
      id="password"
      label="Password"
      variant="outlined"
      type={showPassword ? "text" : "password"}
      register={register("password")}
      error={!!errors.password?.message}
      helperText={errors?.password?.message?.toString() || ""}
      size="small"
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
      type="submit"
      variant="contained"
      className="login-btn"
      sx={{ mt: 1 }}
      onClick={onSubmit}
    >
      Log In
    </Button>
    <a href="/signup" style={{ textDecoration: "none" }}>
      <Typography sx={{ color: "gray" }}>
        Don't have an account?{" "}
        <span style={{ fontWeight: "bold" }}>Signup here</span>
      </Typography>
    </a>
  </Box>
);

export default Login;
