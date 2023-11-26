import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface FormInputFieldProps {
  register: any;
}

function FormInputField({
  register,
  id,
  label,
  error,
  helperText,
  required,
  variant,
  disabled,
  ...rest
}: FormInputFieldProps & TextFieldProps) {
  return (
    <>
      <TextField
        required={required}
        id={id}
        label={label}
        variant="outlined"
        {...register}
        error={error}
        helperText={helperText}
        disabled={false}
        {...rest}
      />
    </>
  );
}

export default FormInputField;
