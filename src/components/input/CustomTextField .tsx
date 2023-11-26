import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

interface TextFieldProps {
  label: string;
  type: any;
  icon?: any;
  placeholder?: string;
  id: string;
  helperText: string;
  error: boolean;
  required: boolean;
  register: any;
}

export const CustomTextField = ({
  label,
  type,
  icon,
  placeholder,
  id,
  helperText,
  error,
  required,
  register,
}: TextFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-sm font-normal mb-2 ${error && "text-red-700"}`}
      >
        {label} <span className="text-red-700">{required ? "*" : ""}</span>
      </label>
      <div style={{ position: "relative" }}>
        <TextField
          {...register}
          type={type}
          id={id}
          variant="outlined"
          fullWidth
          className={`py-2 px-3 border-[1px] rounded-md text-sm focus:outline-0 ${
            error && "border-red-700"
          }`}
          placeholder={placeholder}
          InputProps={{
            endAdornment: icon && (
              <InputAdornment position="end">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "0.75rem",
                  }}
                >
                  {icon}
                </div>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <p className="mt-2 text-xs text-red-700">{helperText}</p>
    </div>
  );
};
