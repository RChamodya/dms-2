import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Switch, FormControlLabel } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import image from "../../assets/images/man.jpg";

interface LoginForm {
  userName: string;
  password: string;
}

const LoginT: React.FC = () => {
  const commonError = "Field is required";
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required(commonError),
    password: Yup.string().required(commonError),
  });

  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [viewPassword2, setViewPassword2] = useState<boolean>(false);

  const navigate = useNavigate();

  const IconOnclick = () => {
    setViewPassword(!viewPassword);
  };

  const IconOnclick2 = () => {
    setViewPassword2(!viewPassword2);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const clicked: SubmitHandler<LoginForm> = (data: FieldValues) => {
    console.log(data);
    navigate("/mainlayout/dashboard");
    notifySuccessful();
  };

  const notifySuccessful = () => {
    toast.success("Logged in successfully");
  };

  return (
    <>
      <div className="absolute w-full h-full overflow-hidden rounded-lg -z-11">
        <img
          className="absolute object-cover w-full h-full rounded-lg"
          src={image}
          alt="Background"
        />
      </div>
      <div className="relative flex items-center justify-center h-screen">
        <div className="bg-[#333338] absolute -mt-[450px] w-[300px] z-10 rounded-lg p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-white text-[25px]">
              <div className="m-2">
                <h1>Log in</h1>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 m-5 text-white">
              <FacebookIcon />
              <GitHubIcon />
              <GoogleIcon />
            </div>
          </div>
        </div>
        <div className="bg-[#FBFCFC] w-[350px] shadow-md  rounded-lg p-4">
          <div className="flex flex-col py-2 text-gray-400">
            <div className="m-3 mt-[100px]">
              <TextField
                label={"User Name"}
                type={"text"}
                id={"userName"}
                helperText={errors?.userName?.message ?? ""}
                error={!!errors.userName?.message}
                required
                {...register("userName")}
              />

              <TextField
                // icon={
                //   viewPassword ? (
                //     <VisibilityOffIcon
                //       onClick={IconOnclick}
                //       style={{ cursor: "pointer" }}
                //     />
                //   ) : (
                //     <RemoveRedEyeIcon
                //       onClick={IconOnclick}
                //       style={{ cursor: "pointer" }}
                //     />
                //   )
                // }
                label={"Password"}
                type={viewPassword ? "password" : "text"}
                id={"password"}
                helperText={errors?.password?.message ?? ""}
                error={!!errors.password?.message}
                required
                {...register("password")}
              />
              <div className="mt-3">
                <FormControlLabel
                  value="end"
                  control={<Switch color="primary" />}
                  label="Remember me"
                  labelPlacement="end"
                />
              </div>
            </div>
            <div className="m-5">
              <button
                className="w-full py-2 my-5 text-[18px] font-normal text-white bg-[#313136] rounded-lg shadow-lg shadow-[#bfdbfe]/50 hover:[#884EA0]/40 "
                onClick={handleSubmit(clicked)}
              >
                Log in
              </button>
            </div>

            <h6 className="pb-5 text-sm text-[#313136] cursor-pointer text-center dark:text-white">
              <a href="/signupt">
                Don't have an account? <b>Signup</b>{" "}
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginT;
